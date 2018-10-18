import {exec} from "child_process";
import {Command, CommandContext, RestrictGroup} from "@cloudrex/forge";

export default class UpdateCommand extends Command {
    readonly meta = {
        name: "update",
        description: "Pull changes from the git repository"
    };

    readonly aliases = ["pull"];

    readonly restrict: any = {
        specific: [RestrictGroup.BotOwner]
    };

    public executed(context: CommandContext): Promise<void> {
        return new Promise((resolve) => {
            exec("git pull", async (error: any, stdOut: string | Buffer) => {
                if (error) {
                    await context.fail(`There was an error while pulling changes (${error.message})`, false);

                    return;
                }

                await context.ok(`\`\`\`css\n${stdOut}\`\`\``);
                resolve();
            });
        });
    }
};