import { TCommand } from '../types/command';
import Discord from 'discord.js';

const extractCommand = (DiscordMessage: Discord.Message): TCommand => {
  const arr = DiscordMessage.content.split(/!([A-Za-z0-9]+)/);
  return {
    author: DiscordMessage.author,
    message: DiscordMessage,
    command: arr[1],
    args: arr[2].split(' ').filter(e => e),
  };
};

const isValidCommand = (DiscordMessage: Discord.Message) => {
  if (DiscordMessage.content.length > 128) return null;
  return DiscordMessage.content.match(/![A-Za-z]/);
};

export { extractCommand, isValidCommand };
