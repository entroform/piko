import {
  hasUppercaseLetter,
  isKebabCase,
  isSnakeCase,
} from '../lib/piko';

describe('hasUppercaseLetter', () => {
  expect(hasUppercaseLetter('Hello World')).toBe(true);
  expect(hasUppercaseLetter('hello world')).toBe(false);
  expect(hasUppercaseLetter('Hello World', 'I love cats')).toBe(true);
  expect(hasUppercaseLetter('hello world', 'I love cats')).toBe(false);
  expect(hasUppercaseLetter('hello world', 'i love cats')).toBe(false);
});

test('isKebabCase', () => {
  expect(isKebabCase('hello-world')).toBe(true);
  expect(isKebabCase('helloWorld')).toBe(false);
  expect(isKebabCase('Hello-World')).toBe(false);
  expect(isKebabCase('hello_world')).toBe(false);
  expect(isKebabCase('hello world')).toBe(false);
  expect(isKebabCase('-hello')).toBe(false);
  expect(isKebabCase('world-')).toBe(false);
  expect(isKebabCase('12world-')).toBe(false);
  expect(isKebabCase('hello-world', 'i-love-cats')).toBe(true);
  expect(isKebabCase('hello_world', 'i-love-cats')).toBe(false);
});

test('isSnakeCase', () => {
  expect(isSnakeCase('hello_world')).toBe(true);
  expect(isSnakeCase('helloWorld')).toBe(false);
  expect(isSnakeCase('Hello-World')).toBe(false);
  expect(isSnakeCase('hello world')).toBe(false);
  expect(isSnakeCase('hello-world')).toBe(false);
  expect(isSnakeCase('_hello')).toBe(false);
  expect(isSnakeCase('world_')).toBe(false);
  expect(isSnakeCase('hello_world', 'i_love_cats')).toBe(true);
  expect(isSnakeCase('hello_world', 'i-love-cats')).toBe(false);
});