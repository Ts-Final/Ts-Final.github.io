import {displayEnum} from "./display.ts";
import {player} from "../player";

interface subTab {
  name: string,
  frame: number,
  color?: string,

  get unlocked(): boolean
}

export interface LB_TAB {
  name: string,
  frame: number[],
  subTabs?: subTab[],
  color?: string,

  get unlocked(): boolean,
}

export const Tabs: LB_TAB[] = [
  {
    name: "资源",
    frame: [displayEnum.resourceGeneral, displayEnum.resourceDetail],
    unlocked: true,
    subTabs: [
      {
        name: "总览",
        frame: displayEnum.resourceGeneral,
        unlocked: true
      },
      {
        name: "详细",
        frame: displayEnum.resourceDetail,
        unlocked: true
      }
    ]
  },
  {
    name: "生产",
    frame: [displayEnum.task],
    unlocked: true,
  },
  {
    name: "研究",
    frame: [displayEnum.research],
    get unlocked(): boolean {
      return player.resource.energy.amount >= 50
    }
  },
  {
    name: "市场",
    frame: [
      displayEnum.marketExchange,
      displayEnum.marketCompany,
      displayEnum.marketPrice,
      displayEnum.marketUpgrade
    ],
    get unlocked() {
      return player.resource.air.amount >= 10
    },
    subTabs: [
      {
        name: "价格",
        frame: displayEnum.marketPrice,
        unlocked: true
      },
      {
        name: "交易",
        frame: displayEnum.marketExchange,
        unlocked: true
      },
      {
        name: "公司",
        frame: displayEnum.marketCompany,
        unlocked: true
      },
      {
        name: "许可",
        frame: displayEnum.marketUpgrade,
        get unlocked() {
          return player.resource.energy.max_record >= 500
        }
      }
    ]
  },
  {
    name:"指引",
    frame:[displayEnum.h2p],
    get unlocked(): boolean {
      return true
    }
  }
]