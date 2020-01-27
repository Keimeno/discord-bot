import { help } from './help';
import { TCommand, TCommands } from '../../types/command';

const commands: TCommands = {
  help: [
    async (command: TCommand) => {
      return await help(command);
    },
  ],
};

export { commands };
