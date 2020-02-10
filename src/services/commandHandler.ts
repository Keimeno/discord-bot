import Discord from 'discord.js';
import { isValidCommand, extractCommand } from '../utils/commandExtractor';
import { commands } from './commands/index';
import { TCommandHandler, TCommand, TShared } from '../types/command';

const existingCommands = Object.keys(commands);

const registerCommandHandler = (client: Discord.Client) => {
  client.on('message', handleMessage);
};

const handleMessage = (discordMessage: Discord.Message) => {
  if (isValidCommand(discordMessage)) {
    const command = extractCommand(discordMessage);
    if (existingCommands.indexOf(command.command) !== -1) {
      commandHandlers(commands[command.command], command);
    }
  }
};

const commandHandlers = (handlers: TCommandHandler[], command: TCommand) => {
  const shared: TShared = {};

  handlers.forEach(cb => {
    cb(command, shared);
  });
};

export { registerCommandHandler };
