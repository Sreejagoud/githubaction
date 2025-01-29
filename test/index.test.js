const greet = require('../src/utils');

test('greet function should return a greeting message', () => {
  expect(greet('Narender')).toBe('Hello, Narender!');
  expect(greet('Sreeja')).toBe('Hello, Sreeja!');
});
