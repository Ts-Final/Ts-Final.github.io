/**
 * All the types globally used.
 * All types should be exported.
 */

import {Resource} from "./Resource.ts";

/**
 * A key-value pair, K/V is the type
 */
export type KeyValue<K, V> = [K, V]

/**
 * A number-number pair,
 * Firstly used for Id-Value pair in Resource
 */
export type IdValue = KeyValue<number, number>
export type NameValue = KeyValue<string, number>

export type TypeValue = KeyValue<string, string>

export type ResAffectTypes = 'consume'|'pro'|'maxAdd'|'maxMult'

/**
 * 用于表示（比如Research对Resource的产出等）倍率的Affect
 * @example
 * ['energy', 'pro', 1.1] //Energy Production +10%
 * ['iron', 'maxAdd', 1e3] //Iron Maximum +1e3
 */
export type ResAffect = [keyof typeof Resource, ResAffectTypes, number]