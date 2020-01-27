import { TCommand } from '../../types/command';
import { sendMessageToUser } from '../../middleware/messageHandler';

const help = async (command: TCommand) => {
  const message =
    '```css\n=======================' +
    '\n------- [HELP]---------' +
    '\n- Possible Commands:  -' +
    '\n- !help               -' +
    '\n- !more               -' +
    '\n- !joke               -' +
    '\n=======================```';
  await sendMessageToUser(message, command.author);
};

export { help };
