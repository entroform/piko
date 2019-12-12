[@nekobird/piko](../README.md) › [Globals](../globals.md) › ["general"](_general_.md)

# External module: "general"

## Index

### Functions

* [compose](_general_.md#compose)
* [composeRight](_general_.md#composeright)
* [curry](_general_.md#curry)
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
* [pipe](_general_.md#pipe)
* [promiseChain](_general_.md#promisechain)
* [promiseEach](_general_.md#promiseeach)
* [randomChoice](_general_.md#randomchoice)
* [sleep](_general_.md#sleep)
* [throttle](_general_.md#throttle)
* [truthChain](_general_.md#truthchain)
* [unary](_general_.md#unary)

## Functions

###  compose

▸ **compose**<**T**>(...`funcs`: Function[]): *(Anonymous function)*

*Defined in [general.ts:6](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L6)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | Function[] |

**Returns:** *(Anonymous function)*

___

###  composeRight

▸ **composeRight**<**T**>(...`funcs`: Function[]): *(Anonymous function)*

*Defined in [general.ts:12](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L12)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | Function[] |

**Returns:** *(Anonymous function)*

___

###  curry

▸ **curry**<**T**>(`func`: Function): *Function*

*Defined in [general.ts:21](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |

**Returns:** *Function*

___

###  cycleArray

▸ **cycleArray**<**A**>(`array`: A[], `offset`: number): *A*

*Defined in [general.ts:42](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L42)*

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

*Defined in [general.ts:65](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L65)*

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

*Defined in [general.ts:94](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L94)*

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

*Defined in [general.ts:109](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |
`delayInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  fillArraysToLargestLength

▸ **fillArraysToLargestLength**(`filler`: unknown, ...`arrays`: unknown[][]): *number*

*Defined in [general.ts:121](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`filler` | unknown |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  getMinArraysLength

▸ **getMinArraysLength**(...`arrays`: unknown[][]): *number*

*Defined in [general.ts:134](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  isEmptyObject

▸ **isEmptyObject**(`object`: any): *boolean*

*Defined in [general.ts:138](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`object`: any): *boolean*

*Defined in [general.ts:145](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |

**Returns:** *boolean*

___

###  isPromise

▸ **isPromise**(...`things`: any[]): *boolean*

*Defined in [general.ts:152](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`...things` | any[] |

**Returns:** *boolean*

___

###  memo

▸ **memo**<**T**>(`func`: Function, `cache`: Map‹string, T›): *(Anonymous function)*

*Defined in [general.ts:177](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L177)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`cache` | Map‹string, T› |

**Returns:** *(Anonymous function)*

___

###  pipe

▸ **pipe**<**T**>(...`funcs`: Function[]): *(Anonymous function)*

*Defined in [general.ts:17](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L17)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | Function[] |

**Returns:** *(Anonymous function)*

___

###  promiseChain

▸ **promiseChain**(...`funcs`: function[]): *Promise‹void›*

*Defined in [general.ts:191](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *Promise‹void›*

___

###  promiseEach

▸ **promiseEach**<**A**>(`array`: A[], `func`: function): *Promise‹void›*

*Defined in [general.ts:211](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L211)*

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

*Defined in [general.ts:224](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L224)*

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

*Defined in [general.ts:228](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`timeInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  throttle

▸ **throttle**(`func`: Function, `thresholdInSeconds`: number): *Function*

*Defined in [general.ts:232](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L232)*

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`thresholdInSeconds` | number |

**Returns:** *Function*

___

###  truthChain

▸ **truthChain**(...`funcs`: function[]): *boolean*

*Defined in [general.ts:259](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *boolean*

___

###  unary

▸ **unary**<**T**>(`func`: Function): *Function*

*Defined in [general.ts:29](https://github.com/nekobird/piko/blob/9c9e708/lib/general.ts#L29)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |

**Returns:** *Function*
