import {Command, Argument, CommandContext, InternalArgType} from "forge";
import {GuildMember, RichEmbed} from "discord.js";

type AvatarArgs = {
    readonly member: GuildMember;
};

export default class AvatarCommand extends Command {
    readonly meta = {
        name: "avatar",
        description: "Retrieve the avatar image of an user"
    };

    readonly aliases = ["pfp"];

    readonly arguments: Argument[] = [
        {
            name: "member",
            description: "The member to inspect",
            type: InternalArgType.Member,
            required: true
        }
    ];

    public async executed(context: CommandContext, args: AvatarArgs): Promise<void> {
        await context.message.channel.send(new RichEmbed()
            .setColor("GREEN")
            .setImage(args.member.user.avatarURL));
    }
};