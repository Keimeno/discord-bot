import Discord from 'discord.js';
import { isValidCommand, extractCommand } from '../utils/commandExtractor';
import { commands } from './commands/index';
import { TCommandHandler, TCommand } from '../types/command';

const existingCommands = Object.keys(commands);

const registerCommandHandler = (client: Discord.Client) => {
  client.on('message', handleMessage);
};

const handleMessage = (DiscordMessage: Discord.Message) => {
  if (isValidCommand(DiscordMessage)) {
    const command = extractCommand(DiscordMessage);
    if (existingCommands.indexOf(command.command) !== -1) {
      commandHandlers(commands[command.command], command);
    }
  }
};

const commandHandlers = (handlers: TCommandHandler[], command: TCommand) => {
  handlers.forEach(cb => {
    cb(command);
  });
};

export { handleMessage, registerCommandHandler };
