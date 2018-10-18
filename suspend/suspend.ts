import {Command, CommandContext, RestrictGroup} from "@cloudrex/forge";

export default class SuspendCommand extends Command {
    readonly meta = {
        name: "suspend",
        description: "Suspend the bot"
    };

    readonly restrict: any = {
        specific: [RestrictGroup.BotOwner]
    };

    public async executed(context: CommandContext): Promise<void> {
        await context.ok(":tools: Entering suspension state");
        context.bot.suspended = true;
    }
};