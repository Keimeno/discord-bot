import Discord from 'discord.js';

type TCommand = {
  author: Discord.User;
  message: Discord.Message;
  command: string;
  args: string[];
};

type TCommandHandler = (message: TCommand) => void;

type TCommands = {
  readonly [key: string]: TCommandHandler[];
};

export { TCommand, TCommandHandler, TCommands };
