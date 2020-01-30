import {
  average,
  clamp,
  countDigits,
  getEuclideanDistance,
  hypotenuse,
  isInteger,
  isValidArrayIndex,
  snapToInterval,
  transform,
} from '../lib/piko';

describe('snapToInterval', () => {
  it('should return interval value', () => {
    expect(snapToInterval(0.2, 1)).toEqual(0);
    expect(snapToInterval(0.5, 1)).toEqual(1);
    expect(snapToInterval(1, 1)).toEqual(1);
  });
});

describe('getEuclideanDistance', () => {
  it('should return interval value', () => {
    expect(getEuclideanDistance(-1, 1)).toEqual(2);
    expect(getEuclideanDistance(-2, -4)).toEqual(2);
    expect(getEuclideanDistance(-6, -4)).toEqual(2);
    expect(getEuclideanDistance(0, 1)).toEqual(1);
    expect(getEuclideanDistance(0.5, 1)).toEqual(0.5);
    expect(getEuclideanDistance(1, 0)).toEqual(1);
    expect(getEuclideanDistance(1, 1)).toEqual(0);
  });
});

describe('transform', () => {
  it('should return new transformed number', () => {
    expect(transform(0.5, 1, 100)).toEqual(50);
    expect(transform(0.5, 1, [100, 60])).toEqual(80);
    expect(transform(0.75, 1, [100, 0])).toEqual(25);
    expect(transform(0.75, [1, 0], [100, 0])).toEqual(75);
    expect(transform(0, [1, -1], [100, 0])).toEqual(50);
  });
});

describe('hypotenuse', () => {
  it('should return interval value', () => {
    expect(hypotenuse(3, 4)).toEqual(5);
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

describe('isInteger', () => {
  it('should return true if an integer is given', () => {
    expect(isInteger(1)).toEqual(true);
    expect(isInteger(0)).toEqual(true);
    expect(isInteger(-1)).toEqual(true);
  });

  it('should return false otherwise', () => {
    expect(isInteger(0.5)).toEqual(false);
  });
});

describe('isValidArrayIndex', () => {
  it('should return true if a valid index is given', () => {
    expect(isValidArrayIndex(1)).toEqual(true);
    expect(isValidArrayIndex(0)).toEqual(true);
  });

  it('should return false otherwise', () => {
    expect(isValidArrayIndex(0.5)).toEqual(false);
    expect(isValidArrayIndex(-1)).toEqual(false);
    expect(isValidArrayIndex(NaN)).toEqual(false);
  });
});