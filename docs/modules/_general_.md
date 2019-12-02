[@nekobird/piko](../README.md) › [Globals](../globals.md) › ["general"](_general_.md)

# External module: "general"

## Index

### Functions

* [compose](_general_.md#compose)
* [composeRight](_general_.md#composeright)
* [cycleArray](_general_.md#cyclearray)
* [cycleArrayNext](_general_.md#cyclearraynext)
* [debounce](_general_.md#debounce)
* [delay](_general_.md#delay)
* [fillArraysToLargestLength](_general_.md#fillarraystolargestlength)
* [getMinArraysLength](_general_.md#getminarrayslength)
* [isEmptyObject](_general_.md#isemptyobject)
* [isObject](_general_.md#isobject)
* [isPromise](_general_.md#ispromise)
* [memo](_general_.md#memo)
* [promiseChain](_general_.md#promisechain)
* [promiseEach](_general_.md#promiseeach)
* [randomChoice](_general_.md#randomchoice)
* [sleep](_general_.md#sleep)
* [throttle](_general_.md#throttle)
* [truthChain](_general_.md#truthchain)

## Functions

###  compose

▸ **compose**<**T**>(...`funcs`: any[]): *(Anonymous function)*

*Defined in [general.ts:6](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L6)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | any[] |

**Returns:** *(Anonymous function)*

___

###  composeRight

▸ **composeRight**<**T**>(...`funcs`: any[]): *(Anonymous function)*

*Defined in [general.ts:10](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L10)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | any[] |

**Returns:** *(Anonymous function)*

___

###  cycleArray

▸ **cycleArray**<**A**>(`array`: A[], `offset`: number): *A*

*Defined in [general.ts:23](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L23)*

Cycles through the array from the given offset number.
The offset number represents a cycled index of the array.

**Type parameters:**

▪ **A**

The type of array passed in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | A[] | The array that you want to cycle through. |
`offset` | number | Array index offset. |

**Returns:** *A*

A cycled offsetted array value.

___

###  cycleArrayNext

▸ **cycleArrayNext**<**A**>(`array`: A[]): *Function*

*Defined in [general.ts:46](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L46)*

Enter an array of specified type and this returns a cycle array next function.
Each time you call the returned function it will cycle through the array starting from the first item.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | A[] | The array that you want to cycle through. |

**Returns:** *Function*

A function that when you call returns the next item in the array.

___

###  debounce

▸ **debounce**(`func`: Function, `delayInSeconds`: number): *Function*

*Defined in [general.ts:75](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L75)*

Returns a debounce function. Delay is in seconds.

Debouncing is often used to improve browsers performance, but it has many other uses too.

A debounce function is a function that only fires after a certain amount of time have passed.
Usually, this function is bound to an event that fires multiple times really fast.
If the time between those events is smaller than the debounce delay,
the function won't fire until the firing stops the delay time elapsed.
This is useful for detecting or only do something only once event firing has stopped.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`func` | Function | Function that you want to fire after a certain amont of time have passed. |
`delayInSeconds` | number | Delay, in seconds, before the function can fire between previous function call. |

**Returns:** *Function*

A debounce function.

___

###  delay

▸ **delay**(`callback`: Function, `delayInSeconds`: number): *Promise‹void›*

*Defined in [general.ts:90](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |
`delayInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  fillArraysToLargestLength

▸ **fillArraysToLargestLength**(`filler`: unknown, ...`arrays`: unknown[][]): *number*

*Defined in [general.ts:102](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`filler` | unknown |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  getMinArraysLength

▸ **getMinArraysLength**(...`arrays`: unknown[][]): *number*

*Defined in [general.ts:115](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  isEmptyObject

▸ **isEmptyObject**(`object`: any): *boolean*

*Defined in [general.ts:119](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`object`: any): *boolean*

*Defined in [general.ts:126](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isPromise

▸ **isPromise**(...`things`: any[]): *boolean*

*Defined in [general.ts:133](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`...things` | any[] |

**Returns:** *boolean*

___

###  memo

▸ **memo**<**T**>(`func`: Function, `cache`: Map‹string, T›): *(Anonymous function)*

*Defined in [general.ts:158](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L158)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`cache` | Map‹string, T› |

**Returns:** *(Anonymous function)*

___

###  promiseChain

▸ **promiseChain**(...`funcs`: function[]): *Promise‹void›*

*Defined in [general.ts:172](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *Promise‹void›*

___

###  promiseEach

▸ **promiseEach**<**A**>(`array`: A[], `func`: function): *Promise‹void›*

*Defined in [general.ts:192](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L192)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **array**: *A[]*

▪ **func**: *function*

▸ (`value`: A): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *Promise‹void›*

___

###  randomChoice

▸ **randomChoice**<**A**>(...`choices`: A[]): *A*

*Defined in [general.ts:205](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L205)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`...choices` | A[] |

**Returns:** *A*

___

###  sleep

▸ **sleep**(`timeInSeconds`: number): *Promise‹void›*

*Defined in [general.ts:209](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L209)*

**Parameters:**

Name | Type |
------ | ------ |
`timeInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  throttle

▸ **throttle**(`func`: Function, `thresholdInSeconds`: number): *Function*

*Defined in [general.ts:213](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`thresholdInSeconds` | number |

**Returns:** *Function*

___

###  truthChain

▸ **truthChain**(...`funcs`: function[]): *boolean*

*Defined in [general.ts:240](https://github.com/nekobird/piko/blob/28499a7/lib/general.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *boolean*
