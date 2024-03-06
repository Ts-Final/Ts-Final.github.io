import {deepClone} from "./deepClone.ts";

export function randomElement<T>(array:T[]): T{
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

/**
 * 从arr随机多个元素
 * @param array1
 */
export function randomElements<T>(array1:T[]): T[] {
  let array = deepClone(array1)
  const times = Math.floor(Math.random() * array.length)
  let value: T[] = []
  for (let i = 0; i < times; i++) {
    let v = randomElement(array)
    array.splice(array.indexOf(v))
    value.push(v)
  }
  return value
}

/**
 *
 * @param min
 * @param max
 * @param places
 * @return {number} [min, max) 运气上大概取不到端点
 */
export function randomNumber(min:number,max:number,places=2) {
  let randomV = Math.random() // [0,1)
  let length = max-min
  if (length <= 0) {throw new Error(`WTF random number ${min}, ${max}`)}
  randomV *= length
  return Math.floor((randomV + min) * (10^places)) / (10^places)
}