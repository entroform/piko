import {
  snapToInterval,
  isNumber,
  isInteger,
  isValidArrayIndex,
} from '../lib/piko';

describe('snapToInterval', () => {
  it('should return interval value', () => {
    expect(snapToInterval(0.2, 1)).toBe(0);
    expect(snapToInterval(0.5, 1)).toBe(1);
    expect(snapToInterval(1, 1)).toBe(1);
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