import {
  compose,
  composeRight,
  curry,
  cycleArray,
  pipe,
  unary,
} from '../lib/piko';

test('compose', () => {
  const f1 = a => a + 'c';
  const f2 = b => b + 'b';
  expect(compose(f1, f2)('a')).toEqual('abc');
  expect(compose(f2, f1)('a')).toEqual('acb');
});

test('composeRight & pipe', () => {
  const f1 = a => a + 'c';
  const f2 = b => b + 'b';
  expect(composeRight(f2, f1)('a')).toEqual('abc');
  expect(composeRight(f1, f2)('a')).toEqual('acb');
  expect(pipe(f2, f1)('a')).toEqual('abc');
  expect(pipe(f1, f2)('a')).toEqual('acb');
});

test('curry', () => {
  const func = curry((a, b, c, d) => a + b + c + d);
  expect(func('a')('b')('c')('d')).toEqual('abcd');
});

test('unary', () => {
  const func = unary((a, b = 1) => a + b);
  expect(func(1, 0)).toEqual(2);
});

test('cycleArray.', () => {
  expect(cycleArray([1, 2, 3], 0)).toEqual(1);
  expect(cycleArray([1, 2, 3], 2)).toEqual(3);
  expect(cycleArray([1, 2, 3], -1)).toEqual(3);
  expect(cycleArray([1, 2, 3], 3)).toEqual(1);
  expect(cycleArray([1, 2, 3], 8)).toEqual(3);
});

