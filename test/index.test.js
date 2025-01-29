const greet = require('../src/utils');

test('greet function should return a greeting message', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
  expect(greet('Bob')).toBe('Hello, Bob!');
});
