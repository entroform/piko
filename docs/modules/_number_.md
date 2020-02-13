[@nekobird/piko](../README.md) › [Globals](../globals.md) › ["number"](_number_.md)

# External module: "number"

## Index

### Functions

* [average](_number_.md#average)
* [clamp](_number_.md#clamp)
* [countDigits](_number_.md#countdigits)
* [createArrayOfConsecutiveNumbers](_number_.md#createarrayofconsecutivenumbers)
* [cubicBezier](_number_.md#cubicbezier)
* [cycleNumber](_number_.md#cyclenumber)
* [getEuclideanDistance](_number_.md#geteuclideandistance)
* [getRangeFromNumberOrRange](_number_.md#getrangefromnumberorrange)
* [hypotenuse](_number_.md#hypotenuse)
* [isInteger](_number_.md#isinteger)
* [isNumberOrRange](_number_.md#isnumberorrange)
* [isRangeArray](_number_.md#israngearray)
* [isValidArrayIndex](_number_.md#isvalidarrayindex)
* [lerp](_number_.md#lerp)
* [numberIsWithin](_number_.md#numberiswithin)
* [orderRangeArray](_number_.md#orderrangearray)
* [randomNumber](_number_.md#randomnumber)
* [roundTo](_number_.md#roundto)
* [snapToInterval](_number_.md#snaptointerval)
* [sum](_number_.md#sum)
* [toNumber](_number_.md#tonumber)
* [transform](_number_.md#transform)

## Functions

###  average

▸ **average**(...`values`: number[]): *number*

*Defined in [number.ts:25](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | number[] |

**Returns:** *number*

___

###  clamp

▸ **clamp**(`value`: number, `min`: number, `max`: number): *number*

*Defined in [number.ts:31](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`min` | number |
`max` | number |

**Returns:** *number*

▸ **clamp**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange)): *number*

*Defined in [number.ts:32](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number*

___

###  countDigits

▸ **countDigits**(`value`: number): *number*

*Defined in [number.ts:45](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  createArrayOfConsecutiveNumbers

▸ **createArrayOfConsecutiveNumbers**(`range`: [NumberOrRange](_interfaces_.md#numberorrange)): *number[]*

*Defined in [number.ts:206](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number[]*

▸ **createArrayOfConsecutiveNumbers**(`start`: number, `end`: number): *number[]*

*Defined in [number.ts:207](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *number[]*

___

###  cubicBezier

▸ **cubicBezier**(`t`: number, `p1`: number, `cp1`: number, `cp2`: number, `p2`: number): *number*

*Defined in [number.ts:50](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |
`p1` | number |
`cp1` | number |
`cp2` | number |
`p2` | number |

**Returns:** *number*

___

###  cycleNumber

▸ **cycleNumber**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange)): *number*

*Defined in [number.ts:59](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number*

___

###  getEuclideanDistance

▸ **getEuclideanDistance**(`a`: number, `b`: number): *number*

*Defined in [number.ts:86](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  getRangeFromNumberOrRange

▸ **getRangeFromNumberOrRange**(`range`: [NumberOrRange](_interfaces_.md#numberorrange)): *[RangeArray](_interfaces_.md#rangearray)*

*Defined in [number.ts:227](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L227)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *[RangeArray](_interfaces_.md#rangearray)*

___

###  hypotenuse

▸ **hypotenuse**(`x`: number, `y`: number): *number*

*Defined in [number.ts:92](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  isInteger

▸ **isInteger**(`n?`: any): *n is number*

*Defined in [number.ts:249](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L249)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | any |

**Returns:** *n is number*

___

###  isNumberOrRange

▸ **isNumberOrRange**(`thing?`: any): *thing is NumberOrRange*

*Defined in [number.ts:233](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L233)*

**Parameters:**

Name | Type |
------ | ------ |
`thing?` | any |

**Returns:** *thing is NumberOrRange*

___

###  isRangeArray

▸ **isRangeArray**(`thing?`: any): *thing is RangeArray*

*Defined in [number.ts:237](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L237)*

**Parameters:**

Name | Type |
------ | ------ |
`thing?` | any |

**Returns:** *thing is RangeArray*

___

###  isValidArrayIndex

▸ **isValidArrayIndex**(`n?`: any): *n is number*

*Defined in [number.ts:253](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | any |

**Returns:** *n is number*

___

###  lerp

▸ **lerp**(`t`: number, `from`: number, `to`: number): *number*

*Defined in [number.ts:105](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |
`from` | number |
`to` | number |

**Returns:** *number*

___

###  numberIsWithin

▸ **numberIsWithin**(`value`: number, `min`: number, `max`: number, `isExclusive?`: undefined | false | true): *boolean*

*Defined in [number.ts:153](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`min` | number |
`max` | number |
`isExclusive?` | undefined &#124; false &#124; true |

**Returns:** *boolean*

▸ **numberIsWithin**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange), `isExclusive?`: undefined | false | true): *boolean*

*Defined in [number.ts:160](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |
`isExclusive?` | undefined &#124; false &#124; true |

**Returns:** *boolean*

___

###  orderRangeArray

▸ **orderRangeArray**(`range`: [RangeArray](_interfaces_.md#rangearray)): *[RangeArray](_interfaces_.md#rangearray)*

*Defined in [number.ts:245](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L245)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [RangeArray](_interfaces_.md#rangearray) |

**Returns:** *[RangeArray](_interfaces_.md#rangearray)*

___

###  randomNumber

▸ **randomNumber**(`range`: [NumberOrRange](_interfaces_.md#numberorrange), `integerOnly`: boolean, `fixed`: number): *number*

*Defined in [number.ts:109](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L109)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`integerOnly` | boolean | false |
`fixed` | number | 2 |

**Returns:** *number*

___

###  roundTo

▸ **roundTo**(`value`: number, `to`: number): *number*

*Defined in [number.ts:127](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L127)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`to` | number | 0 |

**Returns:** *number*

___

###  snapToInterval

▸ **snapToInterval**(`value`: number, `interval`: number, `origin`: number): *number*

*Defined in [number.ts:10](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`interval` | number | - |
`origin` | number | 0 |

**Returns:** *number*

___

###  sum

▸ **sum**(...`values`: number[]): *number*

*Defined in [number.ts:131](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | number[] |

**Returns:** *number*

___

###  toNumber

▸ **toNumber**(`thing`: number | string): *number*

*Defined in [number.ts:257](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L257)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | number &#124; string |

**Returns:** *number*

___

###  transform

▸ **transform**(`value`: number, `from`: [NumberOrRange](_interfaces_.md#numberorrange), `to`: [NumberOrRange](_interfaces_.md#numberorrange), `clampResult`: boolean): *number*

*Defined in [number.ts:136](https://github.com/nekobird/piko/blob/f4a9cf0/lib/number.ts#L136)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`from` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`to` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`clampResult` | boolean | true |

**Returns:** *number*
