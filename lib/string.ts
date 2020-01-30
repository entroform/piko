import {
  isNumber,
} from './shared';

export type StringOrRegExp = string | RegExp;

export function hasUppercaseLetter(...values: string[]): boolean {
  return values.every(value => /[A-Z]+/g.test(value));
}

export function isKebabCase(...values: string[]): boolean {
  return values.every(value => (
    hasUppercaseLetter(value) === false
    && /^([a-z]+|[a-z][a-z\-]+[a-z])$/g.test(value)
  ));
}

export function isSnakeCase(...values: string[]): boolean {
  return values.every(value => (
    hasUppercaseLetter(value) === false
    && /^([a-z]+|[a-z][a-z\_]+[a-z])$/g.test(value)
  ));
}

export function kebabCaseToCamelCase(from: string): string {
  if (isKebabCase(from)) {
    return from.replace(/(\-[a-z]{1})/g, match => (
      match
        .replace(/[\-]/g, '')
        .toUpperCase()
    ));
  }

  return from;
}

export function lowercaseFirstLetter(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function match(string: string, regex: RegExp): string | string[] | null {
  const value = string.match(regex);

  if (!value) {
    return null;
  }

  if (value.length === 1) {
    return value[0];
  }

  return value;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM
export function removeExtraWhitespaces(value: string): string {
  return value.replace(/[\s]+/g, ' ');
}

export function removeNewLines(value: string): string {
  return value.replace(/[\r\n]+/g, '');
}

export function removeTabs(value: string): string {
  return value.replace(/[\t]+/g, '');
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
export function replace(
  value: string,
  patterns: StringOrRegExp,
  replacement: string | Function,
): string

export function replace(
  value: string,
  patterns: StringOrRegExp[],
  replacement: string | Function,
): string
  
export function replace(
  value: string,
  patterns: StringOrRegExp | StringOrRegExp[],
  replacement: string | Function = '',
): string {
  let result: string = value;

  if (isStringOrRegExpArray(patterns)) {
    patterns.forEach(pattern => {
      result = value.replace(pattern, replacement as string);
    });
  } else if (isStringOrRegExp(patterns)) {
    result = value.replace(patterns, replacement as string);
  }

  return result;
}

export function uppercaseFirstLetter(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function isStringOrRegExp(value: any): value is StringOrRegExp {
  return typeof value === 'string' || value instanceof RegExp;
}

export function isStringOrRegExpArray(value: any): value is StringOrRegExp[] {
  return (
    Array.isArray(value)
    && value.every(isStringOrRegExp)
  );
}

export function toString(value: string | number): string {
  return isNumber(value) ? value.toString() : value;
}
