import {
  compose,
  composeRight,
  curry,
  cycleArray,
  pipe,
  unary,
  once,
  debounce,
  memo,
} from '../lib/piko';

describe('compose', () => {
  it('should compose multiple functions into one', () => {
    const f1 = a => a + 'c';
    const f2 = b => b + 'b';
    expect(compose(f1, f2)('a')).toEqual('abc');
    expect(compose(f2, f1)('a')).toEqual('acb');
  });
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

describe('once', () => {
  it('should only call the given function once', () => {
    const mockCallback = jest.fn(n => n);
    const _once = once(mockCallback);
    _once(1);
    _once(2);
    expect(_once(3)).toEqual(1);
    expect(mockCallback.mock.results[0].value).toEqual(1);
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});

describe('memo', () => {
  it('should only call the given function once', () => {
    const mockCallback = jest.fn(n => n + 1);
    const memoized = memo(mockCallback, new Map());
    const result1 = memoized(1);
    memoized(2);
    const result2 = memoized(1);
    expect(memoized(3)).toEqual(4);
    expect(result1 === result2).toEqual(true);
    expect(mockCallback.mock.calls.length).toEqual(3);
  });
});