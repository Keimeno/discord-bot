import dotenv from 'dotenv';
import Discord from 'discord.js';
import { registerCommandHandler } from './services/commandHandler';
dotenv.config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

registerCommandHandler(client);

client.login(process.env.CLIENT_TOKEN);

export { client };
