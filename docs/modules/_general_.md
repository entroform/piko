[@nekobird/piko](../README.md) › [Globals](../globals.md) › ["general"](_general_.md)

# External module: "general"

## Index

### Functions

* [cycleArray](_general_.md#cyclearray)
* [cycleArrayNext](_general_.md#cyclearraynext)
* [debounce](_general_.md#debounce)
* [delay](_general_.md#delay)
* [fillArraysToLargestLength](_general_.md#fillarraystolargestlength)
* [getMinArraysLength](_general_.md#getminarrayslength)
* [isEmptyObject](_general_.md#isemptyobject)
* [isObject](_general_.md#isobject)
* [isPromise](_general_.md#ispromise)
* [promiseChain](_general_.md#promisechain)
* [promiseEach](_general_.md#promiseeach)
* [randomChoice](_general_.md#randomchoice)
* [sleep](_general_.md#sleep)
* [throttle](_general_.md#throttle)
* [truthChain](_general_.md#truthchain)

## Functions

###  cycleArray

▸ **cycleArray**<**A**>(`array`: A[], `offset`: number): *A*

*Defined in [general.ts:15](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L15)*

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

*Defined in [general.ts:38](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L38)*

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

*Defined in [general.ts:67](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L67)*

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

*Defined in [general.ts:82](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |
`delayInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  fillArraysToLargestLength

▸ **fillArraysToLargestLength**(`filler`: unknown, ...`arrays`: unknown[][]): *number*

*Defined in [general.ts:94](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`filler` | unknown |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  getMinArraysLength

▸ **getMinArraysLength**(...`arrays`: unknown[][]): *number*

*Defined in [general.ts:107](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  isEmptyObject

▸ **isEmptyObject**(`object`: any): *boolean*

*Defined in [general.ts:113](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`object`: any): *boolean*

*Defined in [general.ts:120](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isPromise

▸ **isPromise**(...`things`: any[]): *boolean*

*Defined in [general.ts:127](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`...things` | any[] |

**Returns:** *boolean*

___

###  promiseChain

▸ **promiseChain**(...`funcs`: function[]): *Promise‹void›*

*Defined in [general.ts:152](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *Promise‹void›*

___

###  promiseEach

▸ **promiseEach**<**A**>(`array`: A[], `func`: function): *Promise‹void›*

*Defined in [general.ts:172](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L172)*

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

*Defined in [general.ts:185](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L185)*

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

*Defined in [general.ts:190](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`timeInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  throttle

▸ **throttle**(`func`: Function, `thresholdInSeconds`: number): *Function*

*Defined in [general.ts:194](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`thresholdInSeconds` | number |

**Returns:** *Function*

___

###  truthChain

▸ **truthChain**(...`funcs`: function[]): *boolean*

*Defined in [general.ts:221](https://github.com/nekobird/piko/blob/ea1c1e7/lib/general.ts#L221)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *boolean*