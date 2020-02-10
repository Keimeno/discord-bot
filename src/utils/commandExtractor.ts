import { TCommand } from '../types/command';
import Discord from 'discord.js';

const extractCommand = (discordMessage: Discord.Message): TCommand => {
  const arr = discordMessage.content.split(/!([A-Za-z0-9]+)/);
  return {
    author: discordMessage.author,
    message: discordMessage,
    command: arr[1],
    args: arr[2].split(' ').filter(e => e),
  };
};

const isValidCommand = (discordMessage: Discord.Message) => {
  if (discordMessage.content.length > 128) return null;
  return discordMessage.content.match(/![A-Za-z]/);
};

export { extractCommand, isValidCommand };
