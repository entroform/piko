import {
  isNumber,
  getMaxArraysLength,
} from '../lib/piko';

describe('isNumber', () => {
  it('should return true if number is given', () => {
    expect(isNumber(-1)).toEqual(true);
    expect(isNumber(0.5)).toEqual(true);
    expect(isNumber(0)).toEqual(true);
    expect(isNumber(1)).toEqual(true);
  });

  it('should return false if other things', () => {
    expect(isNumber('123')).toEqual(false);
    expect(isNumber()).toEqual(false);
    expect(isNumber(NaN)).toEqual(false);
    expect(isNumber(null)).toEqual(false);
    expect(isNumber(undefined)).toEqual(false);
  });
});

describe('getMaxArraysLength', () => {
  it('should return max length of arrays given as arguments', () => {
    expect(getMaxArraysLength([0, 1, 2])).toEqual(3);
    expect(getMaxArraysLength([0, 1, 2], [0], [0, 1])).toEqual(3);
  });
});

