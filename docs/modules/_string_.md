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
* [uppercaseFirstLetter](_string_.md#uppercasefirstletter)

## Type aliases

###  StringOrRegExp

Ƭ **StringOrRegExp**: *string | RegExp*

*Defined in [string.ts:1](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L1)*

## Functions

###  hasUppercaseLetter

▸ **hasUppercaseLetter**(...`values`: string[]): *boolean*

*Defined in [string.ts:3](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | string[] |

**Returns:** *boolean*

___

###  isKebabCase

▸ **isKebabCase**(...`values`: string[]): *boolean*

*Defined in [string.ts:7](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | string[] |

**Returns:** *boolean*

___

###  isSnakeCase

▸ **isSnakeCase**(...`values`: string[]): *boolean*

*Defined in [string.ts:14](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | string[] |

**Returns:** *boolean*

___

###  isStringOrRegExp

▸ **isStringOrRegExp**(`thing`: any): *boolean*

*Defined in [string.ts:96](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *boolean*

___

###  isStringOrRegExpArray

▸ **isStringOrRegExpArray**(`thing`: any): *boolean*

*Defined in [string.ts:100](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *boolean*

___

###  kebabCaseToCamelCase

▸ **kebabCaseToCamelCase**(`from`: string): *string*

*Defined in [string.ts:21](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | string |

**Returns:** *string*

___

###  lowercaseFirstLetter

▸ **lowercaseFirstLetter**(`string`: string): *string*

*Defined in [string.ts:32](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *string*

___

###  match

▸ **match**(`string`: string, `regex`: RegExp): *string | string[] | null*

*Defined in [string.ts:36](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`regex` | RegExp |

**Returns:** *string | string[] | null*

___

###  removeExtraWhitespaces

▸ **removeExtraWhitespaces**(`string`: string): *string*

*Defined in [string.ts:49](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *string*

___

###  removeNewLines

▸ **removeNewLines**(`string`: string): *string*

*Defined in [string.ts:53](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *string*

___

###  removeTabs

▸ **removeTabs**(`string`: string): *string*

*Defined in [string.ts:57](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *string*

___

###  replace

▸ **replace**(`string`: string, `patterns`: [StringOrRegExp](_string_.md#stringorregexp), `replacement`: string | Function): *string*

*Defined in [string.ts:62](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`patterns` | [StringOrRegExp](_string_.md#stringorregexp) |
`replacement` | string &#124; Function |

**Returns:** *string*

▸ **replace**(`string`: string, `patterns`: [StringOrRegExp](_string_.md#stringorregexp)[], `replacement`: string | Function): *string*

*Defined in [string.ts:68](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`patterns` | [StringOrRegExp](_string_.md#stringorregexp)[] |
`replacement` | string &#124; Function |

**Returns:** *string*

___

###  uppercaseFirstLetter

▸ **uppercaseFirstLetter**(`string`: string): *string*

*Defined in [string.ts:92](https://github.com/nekobird/piko/blob/9c9e708/lib/string.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |

**Returns:** *string*
