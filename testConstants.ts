const LOCAL_URL = 'http://localhost:19006/PlaygroundExample';

const EXAMPLE_CONTENT = [
  'Hello, *world*!',
  '😀🍕🍔',
  'https://expensify.com',
  '# header1',
  '> blockquote',
  '`inline code`',
  '```\ncodeblock\n```',
  '@here',
  '@someone@swmansion.com',
  '#mention-report',
  '![demo image](https://picsum.photos/id/1067/200/300)',
].join('\n');

const INPUT_ID = 'MarkdownInput_Example';
const INPUT_HISTORY_DEBOUNCE_TIME_MS = 150;

export {LOCAL_URL, EXAMPLE_CONTENT, INPUT_ID, INPUT_HISTORY_DEBOUNCE_TIME_MS};
