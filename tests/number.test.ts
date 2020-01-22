import {
  snapToInterval,
} from '../lib/piko';

test('compose', () => {
  expect(snapToInterval(0.2, 1)).toBe(0);
  expect(snapToInterval(0.5, 1)).toBe(1);
  expect(snapToInterval(1, 1)).toBe(1);
});