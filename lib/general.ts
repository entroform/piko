import {
  getMaxArraysLength,
  getRandomInteger,
  isNumber,
} from './shared';

export function compose<T = any>(...funcs: Function[]) {
  return (...args: T[]) => funcs.reduceRight((a, f) => f(a), args);
}

// This works too:
// const compose = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
export function composeRight<T = any>(...funcs: Function[]) {
  return (...args: T[]) => funcs.reduce((a, f) => f(a), args);
}

// Another name for composeRight:
export function pipe<T = any>(...funcs: Function[]) {
  return (...args: T[]) => funcs.reduce((a, f) => f(a), args);
}

export function curry<T = any>(func: Function): Function {
  return function currify(...args: T[]): Function {
    return args.length >= func.length
      ? func.apply(null, args)
      : currify.bind(null, ...args);
  }
}

export function unary<T = any>(func: Function): Function {
  return (...args: T[]) => func.call(null, args[0]);
}

/**
 * Cycles through the array from the given offset number.
 * The offset number represents a cycled index of the array.
 * 
 * @typeparam A The type of array passed in.
 * @param array - The array that you want to cycle through.
 * @param offset - Array index offset.
 * @returns A cycled offsetted array value.
 */
export function cycleArray<A>(array: A[], offset: number): A {
  let index = offset % array.length;

  if (offset < 0) {
    const remainder = Math.abs(offset) % array.length;

    index = remainder === 0
      ? 0
      : array.length + remainder * -1;
  }

  return array[index];
}

/**
 * Enter an array of specified type and this returns a cycle array next function.
 * Each time you call the returned function it will cycle through the array starting from the first item.
 * 
 * @param array - The array that you want to cycle through.
 * @returns A function that when you call returns the next item in the array.
 */
export function cycleArrayNext<A>(array: A[]): Function {
  let index = -1;

  return () => {
    index++;

    if (index > array.length - 1) {
      index = 0;
    }

    return array[index];
  };
}

/**
 * Returns a debounce function. Delay is in seconds. 
 * 
 * Debouncing is often used to improve browsers performance, but it has many other uses too.
 * 
 * A debounce function is a function that only fires after a certain amount of time have passed.
 * Usually, this function is bound to an event that fires multiple times really fast.
 * If the time between those events is smaller than the debounce delay,
 * the function won't fire until the firing stops the delay time elapsed.
 * This is useful for detecting or only do something only once event firing has stopped.
 * 
 * @param func - Function that you want to fire after a certain amont of time have passed.
 * @param delayInSeconds - Delay, in seconds, before the function can fire between previous function call.
 * @returns A debounce function.
 */
export function debounce(func: Function, delayInSeconds: number): Function {
  let timeout: number;

  return () => {
    clearTimeout(timeout);

    timeout = setTimeout(
      () => func.apply(this, arguments),
      delayInSeconds * 1000
    );
  };
}

export function delay<T = void>(callback: Function, delayInSeconds: number): Promise<T> {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(callback()),
      delayInSeconds * 1000
    );
  });
}

export function fillArraysToLargestLength(filler: unknown, ...arrays: unknown[][]): number {
  const maxLength = getMaxArraysLength(...arrays);

  arrays.forEach(array => {
    while (array.length < maxLength) {
      array.push(filler);
    }
  });

  return maxLength;
}

export function getMinArraysLength(...arrays: unknown[][]): number {
  return Math.min(...arrays.map(array => array.length));
}

export function isEmptyObject(object?: any): object is {} {
  return isObject(object) && Object.keys(object).length < 1;
}

export function isObject(object?: any): object is Object {
  return typeof object === 'object' && object !== null;
}

export function isPromise<T>(thing?: any): thing is Promise<T>;
export function isPromise(...things: any[]): boolean;
export function isPromise<T>(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isPromise = <T>(thing: any): thing is Promise<T> => (
    isObject(thing)
    && 'then' in thing
    && typeof thing.then === 'function'
    && thing instanceof Promise
    && Promise.resolve(thing) === thing
  );

  return things.every(isPromise);
}

export function memo<T>(func: Function, cache: Map<string, T>): Function {
  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const value = func(...args);

    cache.set(key, value);

    return value;
  }
}

export function once(fn: Function): Function {
  let isCalled = false;

  let returnValue = null;

  return (...args) => {
    if (!isCalled) {
      returnValue = fn(...args);
      isCalled = true;
    }

    return returnValue;
  }
}

export function promiseChain(...funcs: (() => Promise<void>)[]): Promise<void> {
  return new Promise((resolve, reject) => {
    let currentIndex = -1;

    const loop = () => {
      currentIndex++;

      typeof funcs[currentIndex] === 'function'
        ? funcs[currentIndex]()
            .then(() => loop())
            .catch(error => reject(error))
        : resolve();
    }

    loop();
  });
}

export function promiseEach<A>(array: A[], func: (value: A) => Promise<void>): Promise<void> {
  return array.length === 0
    ? Promise.resolve()
    : array.reduce(
        (previous: Promise<void>, current: A) => previous.then(() => func(current)),
        Promise.resolve(),
      );
}

export function randomChoice<A>(...choices: A[]): A {
  return choices[getRandomInteger(0, choices.length - 1)];
}

export function sleep(timeInSeconds: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), timeInSeconds * 1000));
}

export function throttle(func: Function, thresholdInSeconds: number): Function {
  let timeout: number;
  let last: number;

  const threshold = thresholdInSeconds * 1000;

  return function() {
    const now = Date.now();

    if (isNumber(last) && now < last + threshold) {
      clearTimeout(timeout);

      timeout = setTimeout(
        () => {
          last = now;
          func.apply(this, arguments);
        },
        threshold
      );
    } else {
      last = now;

      func.apply(this, arguments);
    }
  };
}

export function truthChain(...funcs: (() => boolean)[]): boolean {
  return funcs.every(func => func());
}