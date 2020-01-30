[@nekobird/piko](../README.md) › [Globals](../globals.md) › ["number"](_number_.md)

# External module: "number"

## Index

### Functions

* [average](_number_.md#average)
* [clamp](_number_.md#clamp)
* [countDigits](_number_.md#countdigits)
* [cubicBezier](_number_.md#cubicbezier)
* [cycleNumber](_number_.md#cyclenumber)
* [getEuclideanDistance](_number_.md#geteuclideandistance)
* [getRangeFromNumberOrRange](_number_.md#getrangefromnumberorrange)
* [getSign](_number_.md#getsign)
* [hypotenuse](_number_.md#hypotenuse)
* [isInteger](_number_.md#isinteger)
* [isNumberOrRange](_number_.md#isnumberorrange)
* [isRangeArray](_number_.md#israngearray)
* [isValidArrayIndex](_number_.md#isvalidarrayindex)
* [lerp](_number_.md#lerp)
* [numberIsWithin](_number_.md#numberiswithin)
* [orderRangeArray](_number_.md#orderrangearray)
* [randomNumber](_number_.md#randomnumber)
* [reciprocal](_number_.md#reciprocal)
* [roundTo](_number_.md#roundto)
* [snapToInterval](_number_.md#snaptointerval)
* [sum](_number_.md#sum)
* [sumNumberArrays](_number_.md#sumnumberarrays)
* [toNumber](_number_.md#tonumber)
* [transform](_number_.md#transform)

## Functions

###  average

▸ **average**(...`values`: number[]): *number*

*Defined in [number.ts:25](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | number[] |

**Returns:** *number*

___

###  clamp

▸ **clamp**(`value`: number, `min`: number, `max`: number): *number*

*Defined in [number.ts:31](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`min` | number |
`max` | number |

**Returns:** *number*

▸ **clamp**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange)): *number*

*Defined in [number.ts:32](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number*

___

###  countDigits

▸ **countDigits**(`value`: number): *number*

*Defined in [number.ts:49](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  cubicBezier

▸ **cubicBezier**(`t`: number, `p1`: number, `cp1`: number, `cp2`: number, `p2`: number): *number*

*Defined in [number.ts:54](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L54)*

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

*Defined in [number.ts:63](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number*

___

###  getEuclideanDistance

▸ **getEuclideanDistance**(`a`: number, `b`: number): *number*

*Defined in [number.ts:94](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  getRangeFromNumberOrRange

▸ **getRangeFromNumberOrRange**(`range`: [NumberOrRange](_interfaces_.md#numberorrange)): *[RangeArray](_interfaces_.md#rangearray)*

*Defined in [number.ts:250](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *[RangeArray](_interfaces_.md#rangearray)*

___

###  getSign

▸ **getSign**(`value`: number): *number*

*Defined in [number.ts:100](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  hypotenuse

▸ **hypotenuse**(`x`: number, `y`: number): *number*

*Defined in [number.ts:104](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  isInteger

▸ **isInteger**(`n?`: any): *n is number*

*Defined in [number.ts:273](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | any |

**Returns:** *n is number*

___

###  isNumberOrRange

▸ **isNumberOrRange**(`thing?`: any): *thing is NumberOrRange*

*Defined in [number.ts:256](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L256)*

**Parameters:**

Name | Type |
------ | ------ |
`thing?` | any |

**Returns:** *thing is NumberOrRange*

___

###  isRangeArray

▸ **isRangeArray**(`thing?`: any): *thing is RangeArray*

*Defined in [number.ts:260](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`thing?` | any |

**Returns:** *thing is RangeArray*

___

###  isValidArrayIndex

▸ **isValidArrayIndex**(`n?`: any): *n is number*

*Defined in [number.ts:277](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L277)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | any |

**Returns:** *n is number*

___

###  lerp

▸ **lerp**(`t`: number, `from`: number, `to`: number): *number*

*Defined in [number.ts:121](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L121)*

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

*Defined in [number.ts:197](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`min` | number |
`max` | number |
`isExclusive?` | undefined &#124; false &#124; true |

**Returns:** *boolean*

▸ **numberIsWithin**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange), `isExclusive?`: undefined | false | true): *boolean*

*Defined in [number.ts:204](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L204)*

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

*Defined in [number.ts:268](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [RangeArray](_interfaces_.md#rangearray) |

**Returns:** *[RangeArray](_interfaces_.md#rangearray)*

___

###  randomNumber

▸ **randomNumber**(`range`: [NumberOrRange](_interfaces_.md#numberorrange), `whole`: boolean, `fixed`: number): *number*

*Defined in [number.ts:125](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L125)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`whole` | boolean | false |
`fixed` | number | 2 |

**Returns:** *number*

___

###  reciprocal

▸ **reciprocal**(`value`: number): *number*

*Defined in [number.ts:144](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  roundTo

▸ **roundTo**(`value`: number, `to`: number): *number*

*Defined in [number.ts:152](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L152)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`to` | number | 0 |

**Returns:** *number*

___

###  snapToInterval

▸ **snapToInterval**(`value`: number, `interval`: number, `origin`: number): *number*

*Defined in [number.ts:10](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L10)*

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

*Defined in [number.ts:156](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | number[] |

**Returns:** *number*

___

###  sumNumberArrays

▸ **sumNumberArrays**(...`arrays`: number[][]): *number[]*

*Defined in [number.ts:160](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | number[][] |

**Returns:** *number[]*

___

###  toNumber

▸ **toNumber**(`thing`: number | string): *number*

*Defined in [number.ts:281](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L281)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | number &#124; string |

**Returns:** *number*

___

###  transform

▸ **transform**(`value`: number, `from`: [NumberOrRange](_interfaces_.md#numberorrange), `to`: [NumberOrRange](_interfaces_.md#numberorrange), `clampResult`: boolean): *number*

*Defined in [number.ts:178](https://github.com/nekobird/piko/blob/a0c0ecf/lib/number.ts#L178)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`from` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`to` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`clampResult` | boolean | true |

**Returns:** *number*
