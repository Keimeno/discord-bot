import {
  buildTitle,
  buildHeader,
  buildClosingHeader,
  buildCommands,
  buildFooter,
  buildPages,
} from '../../src/utils/messageBuilder';

describe('message builder tests', () => {
  test('build header works', () => {
    const header = buildHeader();

    expect(header).toBe('```css\n======================');
  });

  test('build title works if title has an even length', () => {
    const title = buildTitle('test');

    expect(title).toBe('\n------- [test] -------');
  });

  test('build title works if title has an odd length', () => {
    const title = buildTitle('tests');

    expect(title).toBe('\n------ [tests] -------');
  });

  test('build closing header works', () => {
    const closingHeader = buildClosingHeader();

    expect(closingHeader).toBe('\n- Possible Commands: -');
  });

  test('build commands works', () => {
    const sentCommands = ['foo', 'bar', 'baz', 'qux'];
    const result =
      '\n- !foo               -' +
      '\n- !bar               -' +
      '\n- !baz               -' +
      '\n- !qux               -' +
      '\n-                    -' +
      '\n-                    -';

    const commands = buildCommands(sentCommands);

    expect(commands).toBe(result);
  });

  test('build footer works', () => {
    const footer = buildFooter(1, 2);

    expect(footer).toBe('\n================ 1/2 =```');
  });
});
