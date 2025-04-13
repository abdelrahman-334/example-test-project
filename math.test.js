const { multiply, divide } = require('./math');

test('[7] multiplication', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('[8] division', () => {
  expect(divide(10, 2)).toBe(5);
});

test('[9] division_zero', () => {
  expect(() => divide(4, 0)).toThrow('Division by zero');
});
