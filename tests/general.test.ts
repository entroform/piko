import {
  cycleArray,
  compose,
  composeRight,
  pipe,
  curry,
  unary,
} from '../lib/piko';

test('compose', () => {
  const f1 = a => a + 'c';
  const f2 = b => b + 'b';
  expect(compose(f1, f2)('a')).toBe('abc');
  expect(compose(f2, f1)('a')).toBe('acb');
});

test('composeRight & pipe', () => {
  const f1 = a => a + 'c';
  const f2 = b => b + 'b';
  expect(composeRight(f2, f1)('a')).toBe('abc');
  expect(composeRight(f1, f2)('a')).toBe('acb');
  expect(pipe(f2, f1)('a')).toBe('abc');
  expect(pipe(f1, f2)('a')).toBe('acb');
});

test('curry', () => {
  const func = curry((a, b, c, d) => a + b + c + d);
  expect(func('a')('b')('c')('d')).toBe('abcd');
});

test('curry', () => {
  const func = unary((a, b = 1) => a + b);
  expect(func(1, 0)).toBe(2);
});

test('should return 1 if offset of 0 is given.', () => {
  expect(cycleArray([1, 2, 3], 0)).toBe(1);
});

test('should return 3 if offset of 2 is given.', () => {
  expect(cycleArray([1, 2, 3], 2)).toBe(3);
});

test('should return 3 if offset of -1 is given.', () => {
  expect(cycleArray([1, 2, 3], -1)).toBe(3);
});

test('should return 1 if offset of 3 is given.', () => {
  expect(cycleArray([1, 2, 3], 3)).toBe(1);
});

test('should return 3 if offset of 8 is given.', () => {
  expect(cycleArray([1, 2, 3], 8)).toBe(3);
});

