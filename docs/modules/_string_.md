[@nekobird/piko](../README.md) › [Globals](../globals.md) › ["string"](_string_.md)

# External module: "string"

## Index

### Type aliases

* [StringOrRegExp](_string_.md#stringorregexp)

### Functions

* [hasUppercaseLetter](_string_.md#hasuppercaseletter)
* [isKebabCase](_string_.md#iskebabcase)
* [isSnakeCase](_string_.md#issnakecase)
* [isStringOrRegExp](_string_.md#isstringorregexp)
* [isStringOrRegExpArray](_string_.md#isstringorregexparray)
* [kebabCaseToCamelCase](_string_.md#kebabcasetocamelcase)
* [lowercaseFirstLetter](_string_.md#lowercasefirstletter)
* [match](_string_.md#match)
* [removeExtraWhitespaces](_string_.md#removeextrawhitespaces)
* [removeNewLines](_string_.md#removenewlines)
* [removeTabs](_string_.md#removetabs)
* [replace](_string_.md#replace)
* [toString](_string_.md#tostring)
* [uppercaseFirstLetter](_string_.md#uppercasefirstletter)

## Type aliases

###  StringOrRegExp

Ƭ **StringOrRegExp**: *string | RegExp*

*Defined in [string.ts:5](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L5)*

## Functions

###  hasUppercaseLetter

▸ **hasUppercaseLetter**(...`values`: string[]): *boolean*

*Defined in [string.ts:7](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | string[] |

**Returns:** *boolean*

___

###  isKebabCase

▸ **isKebabCase**(...`values`: string[]): *boolean*

*Defined in [string.ts:11](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | string[] |

**Returns:** *boolean*

___

###  isSnakeCase

▸ **isSnakeCase**(...`values`: string[]): *boolean*

*Defined in [string.ts:18](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | string[] |

**Returns:** *boolean*

___

###  isStringOrRegExp

▸ **isStringOrRegExp**(`value`: any): *value is StringOrRegExp*

*Defined in [string.ts:103](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is StringOrRegExp*

___

###  isStringOrRegExpArray

▸ **isStringOrRegExpArray**(`value?`: any): *value is StringOrRegExp[]*

*Defined in [string.ts:107](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *value is StringOrRegExp[]*

___

###  kebabCaseToCamelCase

▸ **kebabCaseToCamelCase**(`from`: string): *string*

*Defined in [string.ts:25](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |

**Returns:** *string*

___

###  lowercaseFirstLetter

▸ **lowercaseFirstLetter**(`value`: string): *string*

*Defined in [string.ts:37](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  match

▸ **match**(`string`: string, `regex`: RegExp): *string | string[] | null*

*Defined in [string.ts:41](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`regex` | RegExp |

**Returns:** *string | string[] | null*

___

###  removeExtraWhitespaces

▸ **removeExtraWhitespaces**(`value`: string): *string*

*Defined in [string.ts:56](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  removeNewLines

▸ **removeNewLines**(`value`: string): *string*

*Defined in [string.ts:60](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  removeTabs

▸ **removeTabs**(`value`: string): *string*

*Defined in [string.ts:64](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*

___

###  replace

▸ **replace**(`value`: string, `patterns`: [StringOrRegExp](_string_.md#stringorregexp), `replacement`: string | Function): *string*

*Defined in [string.ts:69](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`patterns` | [StringOrRegExp](_string_.md#stringorregexp) |
`replacement` | string &#124; Function |

**Returns:** *string*

▸ **replace**(`value`: string, `patterns`: [StringOrRegExp](_string_.md#stringorregexp)[], `replacement`: string | Function): *string*

*Defined in [string.ts:75](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`patterns` | [StringOrRegExp](_string_.md#stringorregexp)[] |
`replacement` | string &#124; Function |

**Returns:** *string*

___

###  toString

▸ **toString**(`value`: string | number): *string*

*Defined in [string.ts:114](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *string*

___

###  uppercaseFirstLetter

▸ **uppercaseFirstLetter**(`value`: string): *string*

*Defined in [string.ts:99](https://github.com/nekobird/piko/blob/aa2d1f2/lib/string.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*
