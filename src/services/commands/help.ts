import { TCommand } from '../../types/command';
import { sendMessageToChannel } from '../../utils/messageHandler';
import { buildPages } from '../../utils/messageBuilder';
import { PAGE_NOT_FOUND_MESSAGE } from '../../utils/standardMessages';

const TITLE = 'HELP';
const COMMANDS = [
  'help',
  'joke',
  'other',
  'stuff',
  'multiple',
  'pages',
  'are',
  'working',
];

// pages will be stored in heap -> reduces time to compute up to 2 seconds
const PAGES = buildPages(TITLE, COMMANDS);

const help = async (command: TCommand) => {
  let message = '';

  if (!command.args.length) {
    message = PAGES[0];
  } else if (PAGES[+command.args[0] - 1]) {
    message = PAGES[+command.args[0] - 1];
  } else {
    message = PAGE_NOT_FOUND_MESSAGE;
  }

  await sendMessageToChannel(
    message,
    command.message.channel.id,
    command.author.client
  );
};

export { help };
