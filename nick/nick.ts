import {Argument, ChatEnvironment, Command, Permission, PrimitiveArgType, CommandContext} from "@cloudrex/forge";

type NickArgs = {
    readonly nickname: string;
}

export default class NickCommand extends Command {
    readonly meta = {
        name: "nick",
        description: "Manage nicknames"
    };

    readonly aliases = ["nickname"];

    readonly arguments: Argument[] = [
        {
            name: "nickname",
            description: "The desired nickname",
            type: PrimitiveArgType.String,
            required: true
        }
    ];

    readonly restrict: any = {
        environment: ChatEnvironment.Guild,
        selfPermissions: [Permission.ManageNicknames],
        issuerPermissions: [Permission.ChangeNickname]
    };

    public async executed(context: CommandContext, args: NickArgs): Promise<void> {
        await context.message.member.setNickname(args.nickname);
    }
};