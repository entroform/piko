export type StringOrRegExp = string | RegExp;

export function hasUppercaseLetter(...values: string[]): boolean {
  return values.every(value => value !== value.toLowerCase());
}

export function isKebabCase(...values: string[]): boolean {
  return values.every(value => (
    hasUppercaseLetter(value) === false
    && value.match(/^([a-z]+|[a-z][a-z\-]+[a-z])$/g) !== null
  ));
}

export function isSnakeCase(...values: string[]): boolean {
  return values.every(value => (
    hasUppercaseLetter(value) === false
    && value.match(/^([a-z]+|[a-z][a-z\_]+[a-z])$/g) !== null
  ));
}

export function kebabCaseToCamelCase(from: string): string {
  if (isKebabCase(from) === true) {
    return from.replace(/(\-[a-z]{1})/g, match => (
      match.replace(/[\-]/g, '')
           .toUpperCase()
    ));
  }

  return from;
}

export function lowercaseFirstLetter(string: string): string {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function match(string: string, regex: RegExp): string | string[] | null {
  const value = string.match(regex);

  if (!value) {
    return null;
  } else if (value.length === 1) {
    return value[0];
  }

  return value;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM
export function removeExtraWhitespaces(string: string): string {
  return string.replace(/[\s]+/g, ' ');
}

export function removeNewLines(string: string): string {
  return string.replace(/[\r\n]+/g, '');
}

export function removeTabs(string: string): string {
  return string.replace(/[\t]+/g, '');
}

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
export function replace(
  string: string,
  patterns: StringOrRegExp,
  replacement: string | Function,
): string

export function replace(
  string: string,
  patterns: StringOrRegExp[],
  replacement: string | Function,
): string
  
export function replace(
  string: string,
  patterns: StringOrRegExp | StringOrRegExp[],
  replacement: string | Function = '',
): string {
  let result: string = string;

  if (isStringOrRegExpArray(patterns) === true) {
    (patterns as StringOrRegExp[]).forEach(pattern => {
      result = string.replace(pattern, replacement as string);
    });
  } else if (isStringOrRegExp(patterns) === true) {
    result = string.replace(patterns as StringOrRegExp, replacement as string);
  }

  return result;
}

export function uppercaseFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isStringOrRegExp(thing: any): boolean {
  return typeof thing === 'string' || thing instanceof RegExp;
}

export function isStringOrRegExpArray(thing: any): boolean {
  return (
    Array.isArray(thing) === true
    && thing.every(member => isStringOrRegExp(member))
  );
}
