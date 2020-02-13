export function getRandomInteger(min: number, max: number): number {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
}

export function getMaxArraysLength(...arrays: unknown[][]): number {
  return Math.max(...arrays.map(array => array.length));
}

export function isNumber(value?: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isNullOrUndefined(value?: any): value is null | undefined {
  return typeof value === 'undefined' || value === null;
}

export function toArray<T = unknown>(value?: any): T[] {
  return Array.isArray(value) ? value : [value];
}
