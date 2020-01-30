import {
  compose,
  composeRight,
  curry,
  cycleArray,
  debounce,
  delay,
  isEmptyObject,
  isObject,
  isPromise,
  memo,
  once,
  pipe,
  unary,
} from '../lib/piko';

describe('compose', () => {
  it('should compose multiple functions into one', () => {
    const f1 = a => a + 'c';
    const f2 = b => b + 'b';
    expect(compose(f1, f2)('a')).toEqual('abc');
    expect(compose(f2, f1)('a')).toEqual('acb');
  });
});

describe('composeRight & pipe', () => {
  it('composeRight multiple functions', () => {
    const f1 = a => a + 'c';
    const f2 = b => b + 'b';
    expect(composeRight(f2, f1)('a')).toEqual('abc');
    expect(composeRight(f1, f2)('a')).toEqual('acb');
    expect(pipe(f2, f1)('a')).toEqual('abc');
    expect(pipe(f1, f2)('a')).toEqual('acb');
  });
});

describe('curry', () => {
  it('should curry a function', () => {
    const func = curry((a, b, c, d) => a + b + c + d);
    expect(func('a')('b')('c')('d')).toEqual('abcd');
  });
});

describe('debounce', () => {
  it('should be called once after 500ms time elapsed without being called', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const debounced = debounce(callback, 0.5);

    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(100);
    debounced();
    jest.advanceTimersByTime(500);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('delay', () => {
  it('should return a promise', async () => {
    jest.useRealTimers();
    expect.assertions(2);
    const callback = jest.fn(() => 1);
    const result = await delay(callback, 0);
    expect(result).toEqual(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('unary', () => {
  const func = unary((a, b = 1) => a + b);
  expect(func(1, 0)).toEqual(2);
});

describe('cycleArray.', () => {
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

describe('isObject', () => {
  it('should return true if an object is given', () => {
    expect(isObject({})).toEqual(true);
    expect(isObject({ name: 'Andrew' })).toEqual(true);

    expect(isObject(null)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
  });
});

describe('isEmptyObject', () => {
  it('should return true if an empty object is given', () => {
    expect(isEmptyObject({})).toEqual(true);

    expect(isEmptyObject({ name: 'Andrew' })).toEqual(false);
    expect(isEmptyObject(null)).toEqual(false);
    expect(isEmptyObject(undefined)).toEqual(false);
  });
});

describe('isPromise', () => {
  it('should return true if an empty object is given', () => {
    expect(isPromise(Promise.resolve())).toEqual(true);
    expect(isPromise(Promise.resolve(), Promise.resolve())).toEqual(true);
    expect(isPromise(new Promise(resolve => resolve()))).toEqual(true);

    expect(isPromise(Promise.resolve(), 123)).toEqual(false);
    expect(isPromise({ name: 'Andrew' })).toEqual(false);
    expect(isPromise({ then: n => n })).toEqual(false);
    expect(isPromise(null)).toEqual(false);
    expect(isPromise(undefined)).toEqual(false);
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