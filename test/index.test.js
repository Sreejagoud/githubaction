const Narender = require('../src/utils');

test('greet function should return a greeting message', () => {
  expect(Narender('Alice')).toBe('Hello, Alice!');
  expect(Narender('Bob')).toBe('Hello, Bob!');
});
