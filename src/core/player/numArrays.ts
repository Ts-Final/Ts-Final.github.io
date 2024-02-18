import {GameDataBase} from "../GameDataBase";
import {getNumArray} from "./generator.ts";

/**
 * ```
 * {
 *   0:activated,
 *   1:unlocked
 * }
 * ```
 */
export const task = getNumArray<[boolean, boolean]>(GameDataBase.Tasks.length, [false, false])
/**
 * ```
 * {
 *   0:activated,
 *   1:unlocked,
 *   2:started,
 *   3:level
 * }
 * ```
 */
export const research = getNumArray<[boolean, boolean, number, number]>(GameDataBase.Researches.length, [false, false, 0, 0])