import {TaskClass} from "./class.ts";
import {Resource} from "../resource/Resource.ts";
const True = () => true

export const Tasks: {[x:number]:TaskClass} = {
  1: new TaskClass(1,
    "太阳能",
    "至少太阳一直照耀着这里。",
    "也没有人知道,为什么太阳永不落下",
    [["energy", 10]],
    [],
    True),
  2: new TaskClass(2,
    "捕风瓶",
    "大风凛冽,不过吹不走这绑在柱子上的塑料瓶",
    "但是事实上这个绳结看起来并不是很稳固的样子",
    [["air",10]],
    [["energy", 1]],
    ()=> Resource.energy.amount.value >= 10)
}

/**
 * 能量生产任务
 */
export function energyTasks() {
  let i :TaskClass[] = []
  for (const key in Tasks) {
    if (Tasks[key].produce.find(value => value.res.name == "energy")) {
      i.push(Tasks[key])
    }
  }
  return i
}

/**
 * 非能量的生产任务
 */
export function normalTasks() {
  let i :TaskClass[] = []
  for (const key in Tasks) {
    if (Tasks[key].produce.find(value => value.res.name != "energy")) {
      i.push(Tasks[key])
    }
  }
  return i
}