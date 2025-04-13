const { reverse, capitalize } = require('./stringUtils');

test('[4] reverse', () => {
  expect(reverse("hello")).toBe("olleh");
});

test('[5] capitalize', () => {
  expect(capitalize("world")).toBe("World");
});

test('[6] capitalize_empty', () => {
  expect(capitalize("")).toBe("");
});
