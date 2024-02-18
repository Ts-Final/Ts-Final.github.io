import {countryEnum} from "../situation/country.ts";
import {ResourceTypes} from "../resource.ts";

export interface company {
  id: number
  name: string // 名字
  des: string // 描述
  country: keyof typeof countryEnum // 所属国家 会有依据国家relation而改变价格.
  advantage: ResourceTypes[] // 售卖量比较多的资源
  advPow: [number, number] // adv售卖量的浮动
  allResource: ResourceTypes[]
  baseAmount: number // 售卖数量基础
  get unlock(): boolean // 解锁需求

}

export const Company: company[] = [
  {
    id: 1,
    name: "珉琳矿务局",
    des: "家乡仍然值得信任，只可惜他们……",
    country: "xi",
    advantage: ['iron', 'copper'],
    advPow: [1.25, 1.3],
    baseAmount: 2e3,
    allResource: ["iron", "copper", "coal"],
    unlock: true,
  },
  {
    id: 2,
    name: "初式",
    des:"你觉得这家公司很熟悉，但是说不上什么样的感觉。",
    country: "tsFinal",
    advantage: [],
    advPow: [1,1],
    baseAmount: 1e3,
    allResource: ["energy","water","coal","iron","copper"],
    unlock: true,
  }
]