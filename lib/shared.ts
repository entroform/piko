export function getRandomInteger(min: number, max: number): number {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);

  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
}

export function getMaxArraysLength(...arrays: unknown[][]): number {
  return Math.max(...arrays.map(array => array.length));
}