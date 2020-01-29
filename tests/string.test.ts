import {
  hasUppercaseLetter,
  isKebabCase,
  isSnakeCase,
} from '../lib/piko';

describe('hasUppercaseLetter', () => {
  expect(hasUppercaseLetter('Hello World')).toEqual(true);
  expect(hasUppercaseLetter('hello world')).toEqual(false);
  expect(hasUppercaseLetter('Hello World', 'I love cats')).toEqual(true);
  expect(hasUppercaseLetter('hello world', 'I love cats')).toEqual(false);
  expect(hasUppercaseLetter('hello world', 'i love cats')).toEqual(false);
});

test('isKebabCase', () => {
  expect(isKebabCase('hello-world')).toEqual(true);
  expect(isKebabCase('helloWorld')).toEqual(false);
  expect(isKebabCase('Hello-World')).toEqual(false);
  expect(isKebabCase('hello_world')).toEqual(false);
  expect(isKebabCase('hello world')).toEqual(false);
  expect(isKebabCase('-hello')).toEqual(false);
  expect(isKebabCase('world-')).toEqual(false);
  expect(isKebabCase('12world-')).toEqual(false);
  expect(isKebabCase('hello-world', 'i-love-cats')).toEqual(true);
  expect(isKebabCase('hello_world', 'i-love-cats')).toEqual(false);
});

test('isSnakeCase', () => {
  expect(isSnakeCase('hello_world')).toEqual(true);
  expect(isSnakeCase('helloWorld')).toEqual(false);
  expect(isSnakeCase('Hello-World')).toEqual(false);
  expect(isSnakeCase('hello world')).toEqual(false);
  expect(isSnakeCase('hello-world')).toEqual(false);
  expect(isSnakeCase('_hello')).toEqual(false);
  expect(isSnakeCase('world_')).toEqual(false);
  expect(isSnakeCase('hello_world', 'i_love_cats')).toEqual(true);
  expect(isSnakeCase('hello_world', 'i-love-cats')).toEqual(false);
});