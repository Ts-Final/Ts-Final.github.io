/**
 * All the types globally used.
 * All types should be exported.
 */

/**
 * A key-value pair, K/V is the type
 */
export type KeyValue<K, V> = [K, V]

/**
 * A number-number pair
 * Firstly used for Id-Value pair in Resource
 */
export type IdValue = KeyValue<number, number>

export type TypeValue = KeyValue<string, string>
