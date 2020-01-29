import {
  average,
  clamp,
  countDigits,
  isInteger,
  isNumber,
  isValidArrayIndex,
  snapToInterval,
} from '../lib/piko';

describe('snapToInterval', () => {
  it('should return interval value', () => {
    expect(snapToInterval(0.2, 1)).toEqual(0);
    expect(snapToInterval(0.5, 1)).toEqual(1);
    expect(snapToInterval(1, 1)).toEqual(1);
  });
});

describe('average', () => {
  it('should return the number if only one number is given', () => {
    expect(average(1)).toEqual(1);
  });

  it('should return average of two or more numbers given', () => {
    // (2 + 4) / 2 = 3
    expect(average(2, 4)).toEqual(3);
    // (2 + 4 + 8 + 10) / 4 = 24 / 4 = 6
    expect(average(2, 4, 8, 10)).toEqual(6);
  });
});

describe('clamp', () => {
  it('should clamp value given if min and max is given', () => {
    expect(clamp(2, 0, 1)).toEqual(1);
    expect(clamp(-1, 0, 1)).toEqual(0);
    expect(clamp(0.5, 0, 1)).toEqual(0.5);

    expect(clamp(2, [0, 1])).toEqual(1);
    expect(clamp(-1, [0, 1])).toEqual(0);
    expect(clamp(0.5, [0, 1])).toEqual(0.5);
  });
});

describe('countDigits', () => {
  it('should return the number of digits in a number', () => {
    expect(countDigits(1)).toEqual(1);
    expect(countDigits(123)).toEqual(3);
    expect(countDigits(0.123)).toEqual(4);
  });
});

describe('isNumber', () => {
  it('should return true if number is given', () => {
    expect(isNumber(-1)).toBeTruthy();
    expect(isNumber(0.5)).toBeTruthy();
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(1)).toBeTruthy();
  });

  it('should return false if other things', () => {
    expect(isNumber('123')).toBeFalsy();
    expect(isNumber()).toBeFalsy();
    expect(isNumber(NaN)).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
  });
});

describe('isInteger', () => {
  it('should return true if an integer is given', () => {
    expect(isInteger(1)).toBeTruthy();
    expect(isInteger(0)).toBeTruthy();
    expect(isInteger(-1)).toBeTruthy();
  });

  it('should return false otherwise', () => {
    expect(isInteger(0.5)).toBeFalsy();
  });
});

describe('isValidArrayIndex', () => {
  it('should return true if a valid index is given', () => {
    expect(isValidArrayIndex(1)).toBeTruthy();
    expect(isValidArrayIndex(0)).toBeTruthy();
  });

  it('should return false otherwise', () => {
    expect(isValidArrayIndex(0.5)).toBeFalsy();
    expect(isValidArrayIndex(-1)).toBeFalsy();
    expect(isValidArrayIndex(NaN)).toBeFalsy();
  });
});