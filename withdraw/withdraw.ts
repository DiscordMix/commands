import {Command, CommandContext, RestrictGroup} from "@cloudrex/forge";

export default class Withdraw extends Command {
    readonly meta = {
        name: "withdraw",
        description: "Leave the current server"
    };

    readonly aliases = ["leave"];

    readonly restrict: any = {
        specific: [RestrictGroup.BotOwner]
    };

	public async executed(context: CommandContext): Promise<void> {
		await context.ok(":ok_hand: Bye!");
		await context.message.guild.leave();
	}
};
