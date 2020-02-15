import {
  hasUppercaseLetter,
  isKebabCase,
  isSnakeCase,
  toString,
  uppercaseFirstLetter,
  repeatString,
} from '../lib/piko';

describe('hasUppercaseLetter', () => {
  it('should return true if there is an uppercase in the string(s)', () => {
    expect(hasUppercaseLetter('Hello World')).toEqual(true);
    expect(hasUppercaseLetter('hello world')).toEqual(false);
    expect(hasUppercaseLetter('Hello World', 'I love cats')).toEqual(true);
  });

  it('should return false if there no uppercase in the string(s)', () => {
    expect(hasUppercaseLetter('hello world', 'I love cats')).toEqual(false);
    expect(hasUppercaseLetter('hello world', 'i love cats')).toEqual(false);
  });
});

describe('isKebabCase', () => {
  expect(isKebabCase('hello-world')).toEqual(true);
  expect(isKebabCase('hello-world', 'i-love-cats')).toEqual(true);

  expect(isKebabCase('helloWorld')).toEqual(false);
  expect(isKebabCase('Hello-World')).toEqual(false);
  expect(isKebabCase('hello_world')).toEqual(false);
  expect(isKebabCase('hello world')).toEqual(false);
  expect(isKebabCase('-hello')).toEqual(false);
  expect(isKebabCase('world-')).toEqual(false);
  expect(isKebabCase('12world-')).toEqual(false);  
  expect(isKebabCase('hello_world', 'i-love-cats')).toEqual(false);
});

describe('isSnakeCase', () => {
  expect(isSnakeCase('hello_world')).toEqual(true);
  expect(isSnakeCase('hello_world', 'i_love_cats')).toEqual(true);

  expect(isSnakeCase('helloWorld')).toEqual(false);
  expect(isSnakeCase('Hello-World')).toEqual(false);
  expect(isSnakeCase('hello world')).toEqual(false);
  expect(isSnakeCase('hello-world')).toEqual(false);
  expect(isSnakeCase('_hello')).toEqual(false);
  expect(isSnakeCase('world_')).toEqual(false);  
  expect(isSnakeCase('hello_world', 'i-love-cats')).toEqual(false);
});

describe('uppercaseFirstLetter', () => {
  it('should uppercase first letter in string', () => {
    expect(uppercaseFirstLetter('andrew')).toEqual('Andrew');
    expect(uppercaseFirstLetter('Andrew')).toEqual('Andrew');
  });
});

describe('toString', () => {
  it('should return a string if a number is given', () => {
    expect(toString(-123.4)).toEqual('-123.4');
    expect(toString(0)).toEqual('0');
    expect(toString(123.4)).toEqual('123.4');
    expect(toString(123)).toEqual('123');
  });

  it('should return a string if a string is given', () => {
    expect(toString('')).toEqual('');
    expect(toString('123')).toEqual('123');
    expect(toString('abc')).toEqual('abc');
  });
});

describe('repeatString', () => {
  it('should return repeated string', () => {
    expect(repeatString('hello', 3)).toEqual('hellohellohello');
    expect(repeatString('hello', 0)).toEqual('');
    expect(repeatString('hello', 3, ' ')).toEqual('hello hello hello');
    expect(repeatString('hello', 0, ' ')).toEqual('');
  });
});
