import {Argument, Command, PrimitiveArgType, CommandContext} from "@cloudrex/forge";

type SayArgs = {
    readonly message: string;
}

const mentionPattern: RegExp = /<@!?[0-9]+>|@everyone|@here/gm;

export default class EmulateCommand extends Command {
    readonly meta = {
        name: "say",
        description: "Echo a message"
    };

    readonly aliases = ["echo"];

    readonly arguments: Argument[] = [
        {
            name: "message",
            description: "The message to send",
            type: PrimitiveArgType.String,
            required: true
        }
    ];

    public async executed(context: CommandContext, args: SayArgs): Promise<void> {
        let filteredMessage: string = args.message;

        while (mentionPattern.test(filteredMessage)) {
            filteredMessage = filteredMessage.replace(mentionPattern, "[Mention]");
        }

        // TODO: Debugging
        await context.message.channel.send(`${context.sender.tag} said ` + filteredMessage);
    }
};