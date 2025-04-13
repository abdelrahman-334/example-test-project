const sum = require('./sum');

test('[1] sum_positive', () => {
  expect(sum(1, 2)).toBe(3);
});

test('[2] sum_negative', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('[3] sum_zero', () => {
  expect(sum(0, 0)).toBe(0);
});