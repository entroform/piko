import {
  cycleArray,
} from '../lib/piko';

test('should return 1 if offset of 0 is given.', () => {
  expect(cycleArray([1, 2, 3], 0)).toBe(1);
});

test('should return 3 if offset of 2 is given.', () => {
  expect(cycleArray([1, 2, 3], 2)).toBe(3);
});

test('should return 3 if offset of -1 is given.', () => {
  expect(cycleArray([1, 2, 3], -1)).toBe(3);
});

test('should return 1 if offset of 3 is given.', () => {
  expect(cycleArray([1, 2, 3], 3)).toBe(1);
});

test('should return 3 if offset of 8 is given.', () => {
  expect(cycleArray([1, 2, 3], 8)).toBe(3);
});