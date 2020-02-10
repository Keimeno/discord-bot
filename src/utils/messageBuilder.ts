const MESSAGE_SPACING = 22;
const MAX_WRITEABLE_SPACING = MESSAGE_SPACING - 4;
const MESSAGE_LINES = 10;
const MAX_WRITEABLE_LINES = MESSAGE_LINES - 4;

const template = {
  starting: '```css',
  title: '\n%hyphens% [%title%] %hyphens%',
  closingHeader: '\n- Possible Commands:%whitespace% -',
  message: '\n- !%command%%whitespace% -',
  whitespace: '\n- %whitespace% -',
  footer: '\n%equals% %currentPage%/%maxPages% =',
  ending: '```',
};

const addCharsNTimes = (iterator: number, char: string) => {
  let newString = '';

  for (let i = 0; i < iterator; i++) {
    newString += char;
  }

  return newString;
};

const buildHeader = (): string => {
  let newString = template.starting + '\n';

  newString += addCharsNTimes(MESSAGE_SPACING, '=');

  return newString;
};

const buildTitle = (title: string): string => {
  let message = template.title;

  const iterator = (MAX_WRITEABLE_SPACING - title.length) / 2;
  const hyphens = addCharsNTimes(Math.floor(iterator), '-');

  message = message.replace('%title%', title);
  message = message.replace(/%hyphens%/g, hyphens);

  // if the iterator is an odd number
  // we need to add another hyphen
  // to the end of the message.
  message += iterator % 1 === 0 ? '' : '-';

  return message;
};

const buildClosingHeader = (): string => {
  const whitespace = addCharsNTimes(MESSAGE_SPACING - 22, ' ');
  const newString = template.closingHeader.replace('%whitespace%', whitespace);

  return newString;
};

const buildCommand = (command: string): string => {
  let newString = template.message;

  const difference = MAX_WRITEABLE_SPACING - command.length - 1;
  const whitespace = addCharsNTimes(difference, ' ');

  newString = newString.replace('%command%', command);
  newString = newString.replace('%whitespace%', whitespace);

  return newString;
};

const buildCommands = (commands: string[]): string => {
  let newString = '';

  const difference = MAX_WRITEABLE_LINES - commands.length;
  const whitespace = addCharsNTimes(MAX_WRITEABLE_SPACING, ' ');

  commands.forEach(element => {
    newString += buildCommand(element);
  });

  for (let i = 0; i < difference; i++) {
    newString += template.whitespace.replace('%whitespace%', whitespace);
  }

  return newString;
};

const buildFooter = (currentPage: number, maxPages: number) => {
  let newString = template.footer;

  newString = newString.replace('%currentPage%', currentPage + '');
  newString = newString.replace('%maxPages%', maxPages + '');

  const difference = MESSAGE_SPACING - (newString.length - 9);
  const equals = addCharsNTimes(difference, '=');

  newString = newString.replace('%equals%', equals);

  newString += template.ending;

  return newString;
};

const buildPage = (
  title: string,
  commands: string[],
  currentPage: number,
  maxPages: number
): string => {
  let page = '';

  page += buildHeader();
  page += buildTitle(title);
  page += buildClosingHeader();
  page += buildCommands(commands);
  page += buildFooter(currentPage, maxPages);

  return page;
};

const buildPages = (title: string, commands: string[]): string[] => {
  let pages: string[] = [];
  const maxPages = Math.ceil(commands.length / MAX_WRITEABLE_LINES);

  for (let currentPage = 0; currentPage < maxPages; currentPage++) {
    const pageCommands = commands.splice(0, MAX_WRITEABLE_LINES).filter(e => e);

    pages.push(buildPage(title, pageCommands, currentPage + 1, maxPages));
  }

  return pages;
};

export {
  buildPages,
  buildTitle,
  buildHeader,
  buildClosingHeader,
  buildCommands,
  buildFooter,
};
