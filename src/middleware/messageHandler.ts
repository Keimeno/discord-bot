import Discord, { TextChannel } from 'discord.js';

export const sendMessageToChannel = async (
  message: string,
  channel: string,
  client: Discord.Client
) => {
  return (await (client.channels.get(channel) as TextChannel).send(
    message
  )) as Discord.Message;
};

export const sendMessageToUser = async (
  message: string,
  user: Discord.User
) => {
  return (await user.send(message)) as Discord.Message;
};
