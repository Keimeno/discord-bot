import Discord from 'discord.js';

type TCommand = {
  readonly author: Discord.User;
  readonly message: Discord.Message;
  readonly command: string;
  readonly args: string[];
};

type TShared = any;

type TCommandHandler = (command: TCommand, shared: TShared) => void;

type TCommands = {
  readonly [key: string]: TCommandHandler[];
};

export { TCommand, TCommandHandler, TCommands, TShared };
