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
* [isNumberOrRange](_number_.md#isnumberorrange)
* [isRangeArray](_number_.md#israngearray)
* [lerp](_number_.md#lerp)
* [numberIsWithin](_number_.md#numberiswithin)
* [orderRangeArray](_number_.md#orderrangearray)
* [randomNumber](_number_.md#randomnumber)
* [reciprocal](_number_.md#reciprocal)
* [roundTo](_number_.md#roundto)
* [snapToInterval](_number_.md#snaptointerval)
* [sum](_number_.md#sum)
* [sumNumberArrays](_number_.md#sumnumberarrays)
* [transform](_number_.md#transform)

## Functions

###  average

▸ **average**(...`values`: number[]): *number*

*Defined in [number.ts:26](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | number[] |

**Returns:** *number*

___

###  clamp

▸ **clamp**(`value`: number, `min`: number, `max`: number): *number*

*Defined in [number.ts:34](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`min` | number |
`max` | number |

**Returns:** *number*

▸ **clamp**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange)): *number*

*Defined in [number.ts:35](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number*

___

###  countDigits

▸ **countDigits**(`value`: number): *number*

*Defined in [number.ts:55](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  cubicBezier

▸ **cubicBezier**(`t`: number, `p1`: number, `cp1`: number, `cp2`: number, `p2`: number): *number*

*Defined in [number.ts:65](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L65)*

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

*Defined in [number.ts:74](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *number*

___

###  getEuclideanDistance

▸ **getEuclideanDistance**(`a`: number, `b`: number): *number*

*Defined in [number.ts:113](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  getRangeFromNumberOrRange

▸ **getRangeFromNumberOrRange**(`range`: [NumberOrRange](_interfaces_.md#numberorrange)): *[RangeArray](_interfaces_.md#rangearray)*

*Defined in [number.ts:273](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [NumberOrRange](_interfaces_.md#numberorrange) |

**Returns:** *[RangeArray](_interfaces_.md#rangearray)*

___

###  getSign

▸ **getSign**(`value`: number): *number*

*Defined in [number.ts:120](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  hypotenuse

▸ **hypotenuse**(`x`: number, `y`: number): *number*

*Defined in [number.ts:125](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  isNumberOrRange

▸ **isNumberOrRange**(`thing`: any): *boolean*

*Defined in [number.ts:281](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L281)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *boolean*

___

###  isRangeArray

▸ **isRangeArray**(`thing`: any): *boolean*

*Defined in [number.ts:285](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L285)*

**Parameters:**

Name | Type |
------ | ------ |
`thing` | any |

**Returns:** *boolean*

___

###  lerp

▸ **lerp**(`t`: number, `from`: number, `to`: number): *number*

*Defined in [number.ts:135](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L135)*

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

*Defined in [number.ts:212](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`min` | number |
`max` | number |
`isExclusive?` | undefined &#124; false &#124; true |

**Returns:** *boolean*

▸ **numberIsWithin**(`value`: number, `range`: [NumberOrRange](_interfaces_.md#numberorrange), `isExclusive?`: undefined | false | true): *boolean*

*Defined in [number.ts:219](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L219)*

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

*Defined in [number.ts:293](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L293)*

**Parameters:**

Name | Type |
------ | ------ |
`range` | [RangeArray](_interfaces_.md#rangearray) |

**Returns:** *[RangeArray](_interfaces_.md#rangearray)*

___

###  randomNumber

▸ **randomNumber**(`range`: [NumberOrRange](_interfaces_.md#numberorrange), `whole`: boolean, `fixed`: number): *number*

*Defined in [number.ts:139](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L139)*

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

*Defined in [number.ts:159](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

###  roundTo

▸ **roundTo**(`value`: number, `to`: number): *number*

*Defined in [number.ts:167](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L167)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`to` | number | 0 |

**Returns:** *number*

___

###  snapToInterval

▸ **snapToInterval**(`value`: number, `interval`: number, `origin`: number): *number*

*Defined in [number.ts:10](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L10)*

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

*Defined in [number.ts:171](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | number[] |

**Returns:** *number*

___

###  sumNumberArrays

▸ **sumNumberArrays**(...`arrays`: number[][]): *number[]*

*Defined in [number.ts:175](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L175)*

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | number[][] |

**Returns:** *number[]*

___

###  transform

▸ **transform**(`value`: number, `from`: [NumberOrRange](_interfaces_.md#numberorrange), `to`: [NumberOrRange](_interfaces_.md#numberorrange), `clampResult`: boolean): *number*

*Defined in [number.ts:193](https://github.com/nekobird/piko/blob/9c9e708/lib/number.ts#L193)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | number | - |
`from` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`to` | [NumberOrRange](_interfaces_.md#numberorrange) | - |
`clampResult` | boolean | true |

**Returns:** *number*
