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
* [once](_general_.md#once)
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

*Defined in [general.ts:7](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L7)*

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

*Defined in [general.ts:13](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L13)*

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

*Defined in [general.ts:22](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L22)*

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

*Defined in [general.ts:43](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L43)*

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

*Defined in [general.ts:64](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L64)*

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

*Defined in [general.ts:93](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L93)*

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

▸ **delay**<**T**>(`callback`: Function, `delayInSeconds`: number): *Promise‹T›*

*Defined in [general.ts:104](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L104)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |
`delayInSeconds` | number |

**Returns:** *Promise‹T›*

___

###  fillArraysToLargestLength

▸ **fillArraysToLargestLength**(`filler`: unknown, ...`arrays`: unknown[][]): *number*

*Defined in [general.ts:113](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`filler` | unknown |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  getMinArraysLength

▸ **getMinArraysLength**(...`arrays`: unknown[][]): *number*

*Defined in [general.ts:125](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`...arrays` | unknown[][] |

**Returns:** *number*

___

###  isEmptyObject

▸ **isEmptyObject**(`object?`: any): *object is object*

*Defined in [general.ts:129](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`object?` | any |

**Returns:** *object is object*

___

###  isObject

▸ **isObject**(`object?`: any): *object is Object*

*Defined in [general.ts:133](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`object?` | any |

**Returns:** *object is Object*

___

###  isPromise

▸ **isPromise**<**T**>(`thing?`: any): *thing is Promise<T>*

*Defined in [general.ts:137](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L137)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`thing?` | any |

**Returns:** *thing is Promise<T>*

▸ **isPromise**(...`things`: any[]): *boolean*

*Defined in [general.ts:138](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`...things` | any[] |

**Returns:** *boolean*

___

###  memo

▸ **memo**<**T**>(`func`: Function, `cache`: Map‹string, T›): *Function*

*Defined in [general.ts:155](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L155)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`cache` | Map‹string, T› |

**Returns:** *Function*

___

###  once

▸ **once**(`fn`: Function): *Function*

*Defined in [general.ts:171](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Function |

**Returns:** *Function*

___

###  pipe

▸ **pipe**<**T**>(...`funcs`: Function[]): *(Anonymous function)*

*Defined in [general.ts:18](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L18)*

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

*Defined in [general.ts:185](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *Promise‹void›*

___

###  promiseEach

▸ **promiseEach**<**A**>(`array`: A[], `func`: function): *Promise‹void›*

*Defined in [general.ts:203](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L203)*

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

*Defined in [general.ts:216](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L216)*

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

*Defined in [general.ts:220](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`timeInSeconds` | number |

**Returns:** *Promise‹void›*

___

###  throttle

▸ **throttle**(`func`: Function, `thresholdInSeconds`: number): *Function*

*Defined in [general.ts:224](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |
`thresholdInSeconds` | number |

**Returns:** *Function*

___

###  truthChain

▸ **truthChain**(...`funcs`: function[]): *boolean*

*Defined in [general.ts:251](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L251)*

**Parameters:**

Name | Type |
------ | ------ |
`...funcs` | function[] |

**Returns:** *boolean*

___

###  unary

▸ **unary**<**T**>(`func`: Function): *Function*

*Defined in [general.ts:30](https://github.com/nekobird/piko/blob/a0c0ecf/lib/general.ts#L30)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`func` | Function |

**Returns:** *Function*
