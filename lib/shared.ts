export function getRandomInteger(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getMaxArraysLength(...arrays: unknown[][]): number {
  const lengths = arrays.map(array => array.length);

  return Math.max(...lengths);
}