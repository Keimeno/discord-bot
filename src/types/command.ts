import Discord from 'discord.js';

type TCommand = Readonly<{
  author: Discord.User;
  message: Discord.Message;
  command: string;
  args: string[];
}>;

type TShared = any;

type TCommandHandler = (command: TCommand, shared: TShared) => void;

type TCommands = {
  readonly [key: string]: TCommandHandler[];
};

export { TCommand, TCommandHandler, TCommands, TShared };
