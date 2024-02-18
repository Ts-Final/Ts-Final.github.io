import {ResAffectTypes, ResourceTypes} from "./resource.ts";

export interface Research {
  id: number
  name: string
  des: string
  itl: string
  affect: [ResourceTypes, ResAffectTypes, number][]
  cost: [ResourceTypes, number][]
  time: number
  maxLevel: number
  timePow: number

  get unlock(): boolean
}

export const Researches: Research[] = [
  {
    id: 1,
    name: '电板扩建',
    des: '加几块太阳能板，也许可以让发电更多一点',
    itl: '楼顶一片黑。下面的人看了都说好，太阳是照不到了。不过也看不见阳光了。',
    affect: [['energy', 'pro', 0.05], ["energy", 'maxAdd', 1e3]],
    cost: [['iron', 10]],
    time: 10,
    maxLevel: 2,
    unlock: true,
    timePow: 1.5
  },
  {
    id: 2,
    name: '气象观测 1',
    des: '气象在有些时候还是很重要的',
    itl: '如果天下起了大雨，那么人们也许会陷入哀伤。如果天下起了大鱼……',
    affect: [["air", 'pro', 0.05], ['water', "pro", 0.01]],
    cost: [],
    time: 15,
    maxLevel: 1,
    unlock: true,
    timePow: 1,
  }
]