import {ResourceTypes} from "./types.ts";

export interface Task {
  id: number
  name: string
  des:string
  itl: string
  produce: [ResourceTypes, number][]
  cost: [ResourceTypes, number][]
  get unlock(): boolean
}

export const Tasks:{[x:number]:Task} = {
  1: {
    id:1,
    name: "太阳能",
    des:"至少太阳一直照耀着这里。",
    itl:"也没有人知道，为什么太阳永不落下",
    produce:[["energy", 10]],
    cost:[],
    unlock: true
  }
}