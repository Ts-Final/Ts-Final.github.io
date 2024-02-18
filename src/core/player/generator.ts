import {deepClone} from "../functions/deepClone.ts";

export function getNumArray<T>(length: number, init:T):T[] {
  const d: T[] = []
  for (let i = 0; i < length; i++) {
    d.push(deepClone(init))
  }
  return d
}
