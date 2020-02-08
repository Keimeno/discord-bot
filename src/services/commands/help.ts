import { TCommand } from '../../types/command';
import { sendMessageToChannel } from '../../utils/messageHandler';

const help = async (command: TCommand) => {
  const message =
    '```css' + 
    '\n=======================' +
    '\n------- [HELP]---------' +
    '\n- Possible Commands:  -' +
    '\n- !help               -' +
    '\n- !more               -' +
    '\n- !joke               -' +
    '\n=======================' + 
    '```';
  await sendMessageToChannel(message, command.message.channel.id, command.author.client);
};

export { help };
