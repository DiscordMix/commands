import {Utils, Command, Argument, InternalArgType, CommandContext} from "@cloudrex/forge";
import {GuildMember} from "discord.js";

const insults: string[] = [
	"{subject} has magically turned a pile of poo.",
	"{subject} is now officially known as no-one.",
	"{subject} now works cleaning toilets.",
	"{subject} needs to be reborn.",
	"{subject}'s father was Hitler.",
	"{subject} no u.",
	"{subject} now works as a clown full-time.",
    "{subject} lives in the sewers.",
    "{subject} is no longer cool.",
    "{subject} has been employed at the circus."
];

const fillInsult: any = (subject: any, insult: any) => insult.replace("{subject}", `**${subject}**`);

type InsultArgs = {
    readonly member: GuildMember;
}

export default class Insult extends Command {
    readonly meta: any = {
        name: "insult",
        description: "Insult someone"
    };

    readonly arguments: Argument[] = [
        {
            name: "member",
            description: "The member to insult",
            type: InternalArgType.Member,
            required: true
        }
    ];

	public async executed(context: CommandContext, args: InsultArgs): Promise<void> {
		await context.ok(fillInsult(args.member.user.username, insults[Utils.getRandomInt(0, insults.length)]));
	}
};
