import {
  NumberOrRange,
  RangeArray,
} from './interfaces';

import {
  isNumber,
  getMaxArraysLength,
} from './shared';

export function snapToInterval(
  value: number,
  interval: number,
  origin: number = 0,
): number {
  const sign      = Math.sign(value) || 1;
  const _interval = Math.abs(interval);
  const _value    = Math.abs(value);
  const remainder = Math.abs(value - origin) % _interval;
  const result = remainder >= _interval / 2
    ? _value - remainder + _interval
    : _value - remainder;
  return result * sign;
}

export function average(...values: number[]): number {
  if (values.length === 1) {
    return values[0];
  }

  return sum(...values) / values.length;
}

export function clamp(value: number, min: number, max: number): number;
export function clamp(value: number, range: NumberOrRange): number;
export function clamp(value: number, a: NumberOrRange, b?: number): number {
  let range: RangeArray;

  if (isNumber(a) && isNumber(b)) {
    range = orderRangeArray([a, b]);
  } else if (isNumberOrRange(a) && typeof b === 'undefined') {
    range = getRangeFromNumberOrRange(a);
  } else {
    return value;
  }

  let [min, max] = orderRangeArray(range);

  return Math.max(min, Math.min(value, max));
}

export function countDigits(value: number): number {
  const matches = value.toString().match(/([\d])/g);
  return matches === null ? 0 : matches.length;
}

export function cubicBezier(t: number, p1: number, cp1: number, cp2: number, p2: number): number {
  return (
    Math.pow(1 - t, 3) * p1 +
    3 * t * Math.pow(1 - t, 2) * cp1 +
    3 * t * t * (1 - t) * cp2 +
    t * t * t * p2
  );
}

export function cycleNumber(
  value: number,
  range: NumberOrRange,
): number {
  const _range = getRangeFromNumberOrRange(range);
  const [min, max] = orderRangeArray(_range);

  if (min === 0 && max === 0) {
    return 0;
  }

  const da = getEuclideanDistance(min, max);

  if (value > max) {
    let db = getEuclideanDistance(value, max);

    let c = (db % da) + min;

    return c === min ? max : c;
  } else if (value < min) {
    let db = getEuclideanDistance(value, min);

    let c = max - (db % da);

    return c === max ? min : c;
  }

  return value;
}

// https://en.wikipedia.org/wiki/Euclidean_distance
export function getEuclideanDistance(a: number, b: number): number {
  return a === b
    ? 0
    : Math.sqrt(Math.abs((a - b) * (b - a)));
}

export function getSign(value: number): number {
  return Math.sign(value) || 1;
}

export function hypotenuse(x: number, y: number): number {
  if (Math.hypot) {
    return Math.hypot(x, y);
  }

  let max = Math.max(Math.abs(x), Math.abs(y));

  if (max === 0) {
    max = 1;
  }

  const min = Math.min(Math.abs(x), Math.abs(y));
  const n = min / max;

  return max * Math.sqrt(1 + n * n);
}

export function lerp(t: number, from: number, to: number): number {
  return (1 - t) * from + t * to;
}

export function randomNumber(
  range: NumberOrRange,
  whole: boolean = false,
  fixed: number = 2,
): number {
  range = getRangeFromNumberOrRange(range);

  if (range[0] === 0 && range[1] === 1) {
    return whole === true
      ? Math.floor(Math.random() * 2)
      : parseFloat(Math.random().toFixed(fixed));
  }
  
  return parseInt(
    transform(Math.random(), 1, range, false).toFixed(0),
    10,
  );
}

export function reciprocal(value: number): number {
  if (value != 0) {
    return 1 / value;
  }

  throw new Error('reciprocal: Division by zero.');
}

export function roundTo(value: number, to: number = 0): number {
  return parseFloat(value.toFixed(to));
}

export function sum(...values: number[]): number {
  return values.reduce((previous, current) => previous + current);
}

export function sumNumberArrays(...arrays: number[][]): number[] {
  const maxLength = getMaxArraysLength(...arrays);

  const sum: number[] = [];

  for (let i = 0; i < maxLength; i++) {
    sum[i] = 0;
    arrays.forEach(array => {
      if (isNumber(array[i])) {
        sum[i] += array[i];
      }
    });
  }

  return sum;
}

// https://math.stackexchange.com/questions/377169/calculating-a-value-inside-one-range-to-a-value-of-another-range/377174
export function transform(
  value: number,
  from: NumberOrRange,
  to: NumberOrRange,
  clampResult: boolean = true,
): number {
  const _from = getRangeFromNumberOrRange(from);
  const _to   = getRangeFromNumberOrRange(to);

  // Division by zero returns Infinite in JavaScript?
  const result = (value - _from[0]) * ((_to[1] - _to[0]) / (_from[1] - _from[0])) + _to[0];

  if (clampResult) {
    return clamp(result, _to);
  }

  return result;
}

export function numberIsWithin(
  value: number,
  min: number,
  max: number,
  isExclusive?: boolean,
): boolean;

export function numberIsWithin(
  value: number,
  range: NumberOrRange,
  isExclusive?: boolean,
): boolean;

export function numberIsWithin(
  value: number,
  a: NumberOrRange,
  b?: number | boolean,
  c?: boolean,
): boolean {
  let range: RangeArray;

  let isExclusive = false;

  if (
    isNumber(a) && isNumber(b)
    && (typeof c === 'boolean' || typeof c === 'undefined')
  ) {
    if (typeof c === 'boolean') {
      isExclusive = c;
    }

    range = orderRangeArray([a, b]);
  } else if (
    isNumberOrRange(a)
    && (
      typeof b === 'boolean' || typeof b === 'undefined'
    )
  ) {
    if (typeof b === 'boolean') {
      isExclusive = b;
    }

    range = getRangeFromNumberOrRange(a);
  } else {
    throw new Error('numberIsWithin: Invalid input.');
  }

  let [min, max] = range;

  return isExclusive === true
    ? value > min && value < max
    : value >= min && value <= max;
}

export function getRangeFromNumberOrRange(range: NumberOrRange): RangeArray {
  return isNumber(range)
    ? [0, range]
    : [range[0], range[1]];
}

export function isNumberOrRange(thing?: any): thing is NumberOrRange {
  return isNumber(thing) || isRangeArray(thing);
}

export function isRangeArray(thing?: any): thing is RangeArray {
  return (
    Array.isArray(thing)
    && thing.length === 2
    && thing.every(member => isNumber(member))
  );
}

export function orderRangeArray(range: RangeArray): RangeArray {
  return [Math.min(...range), Math.max(...range)];
}


export function isInteger(n?: any): n is number {
  return isNumber(n) && n % 1 === 0;
}

export function isValidArrayIndex(n?: any): n is number {
  return isInteger(n) && n >= 0;
}