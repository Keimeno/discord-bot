import { help } from './help';
import { TCommand, TCommands, TShared } from '../../types/command';

const commands: TCommands = {
  help: [
    async (command: TCommand, shared: TShared) => {
      shared.options = 'hello world!';
    },
    async (command: TCommand, shared: TShared) => {
      return await help(command);
    },
  ],
};

export { commands };
