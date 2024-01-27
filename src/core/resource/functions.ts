import {KeyValue} from "./types.ts";

/**
 * 对Any-Number第二项求和
 * @param kv
 */
export function sumOfKeyValue(kv: KeyValue<unknown, number>[]): number {
  let v = 0
  for (const kvElement of kv) {
    v += kvElement[1]
  }

  return v
}


