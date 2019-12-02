import {
  getMaxArraysLength,
  getRandomInteger,
} from './shared';

export function compose<T>(...funcs) {
  return (...args: T[]) => funcs.reduceRight((a, f) => f(a), args);
}

// This works too:
// const compose = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
export function composeRight<T>(...funcs) {
  return (...args: T[]) => funcs.reduce((a, f) => f(a), args);
}

// Another name for composeRight:
export function pipe<T>(...funcs) {
  return (...args: T[]) => funcs.reduce((a, f) => f(a), args);
}

export function curry(func) {
  return function currify(...args) {
    return (args.length >= func.length) ? func.apply(null, args) : currify.bind(null, ...args);
  }
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

    if (remainder === 0) {
      index = 0;
    } else {
      index = array.length + remainder * -1;
    }
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

  return function () {
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

  const delay = delayInSeconds * 1000;

  return function() {
    clearTimeout(timeout);

    timeout = window.setTimeout(
      () => func.apply(this, arguments),
      delay
    );
  };
}

export function delay(callback: Function, delayInSeconds: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(
      () => {
        callback();
        resolve();
      },
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

export function isEmptyObject(object: any): boolean {
  return (
    isObject(object)
    && Object.keys(object).length < 1
  );
}

export function isObject(object: any): boolean {
  return (
    object !== null
    && typeof object === 'object'
  );
}

export function isPromise(...things: any[]): boolean {
  if (things.length === 0) {
    return false;
  }

  const isPromise = thing => {
    return (
      typeof thing === 'object'
      && typeof thing.then === 'function'
      && thing instanceof Promise
      && Promise.resolve(thing) === thing
    );
  }

  for (let i = 0; i < things.length; i++) {
    const thing = things[i];

    if (!isPromise(thing)) {
      return false;
    }
  };

  return true;
}

export function memo<T>(func: Function, cache: Map<string, T>) {
  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const value = func(...args);
      cache.set(key, value);
      return value;
    }
  }
}

export function promiseChain(...funcs: (() => Promise<void>)[]): Promise<void> {
  return new Promise((resolve, reject) => {
    let currentIndex = -1;

    const loop = () => {
      currentIndex++;

      if (typeof funcs[currentIndex] === 'function') {
        funcs[currentIndex]()
          .then(() => loop())
          .catch(error => reject(error));
      } else {
        resolve();
      }
    }

    loop();
  });
}

export function promiseEach<A>(array: A[], func: (value: A) => Promise<void>): Promise<void> {
  if (array.length === 0) {
    return Promise.resolve();
  }

  return array.reduce(
    (previous: Promise<void>, current: A) => {
      return previous.then(() => func(current));
    },
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

    if (typeof last === 'number' && now < last + threshold) {
      clearTimeout(timeout);

      timeout = window.setTimeout(
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
  let result = true;

  for (let i = 0; i < funcs.length; i++) {
    if (funcs[i]() === false) {
      result = false;

      break;
    }
  }

  return result;
}