import {IdValue} from "./types.ts";
import {sumOfKeyValue} from "./functions.ts";
import {ResourceChangeData, ResourceChangeTypes} from "./enums.ts";


export class ResourceClass {
  name: string
  amount: number = 0
  maximum:number=0

  calcMaximum(): number {
    return 10000 * (1 + sumOfKeyValue(this.affectResearchMaxMult)) + sumOfKeyValue(this.affectResearchMaxAdd)
  }

  previous: number = 0
  affectResearchProMult: IdValue[] = []
  affectResearchConsumeMult: IdValue[] = []
  affectResearchMaxAdd: IdValue[] = []
  affectResearchMaxMult: IdValue[] = []
  produceChange: ResourceChangeData = new ResourceChangeData
  consumeChange: ResourceChangeData = new ResourceChangeData

  produce(type: keyof typeof ResourceChangeTypes, value: number): void {
    let finalValue = value * (1 + sumOfKeyValue(this.affectResearchProMult))
    this.produceChange[type] += finalValue
    this.amount += finalValue
  }

  cost(type: keyof typeof ResourceChangeTypes, value: number): void {
    let finalValue = value * (1 - sumOfKeyValue(this.affectResearchConsumeMult))
    this.consumeChange[type] += finalValue
    this.amount -= finalValue
  }

  canProduce(value: number): boolean {
    return value * (1 + sumOfKeyValue(this.affectResearchProMult)) + this.amount <= this.maximum
  }

  canCost(value: number): boolean {
    return value * (1 - sumOfKeyValue(this.affectResearchConsumeMult)) <= this.amount
  }

  update():void {
    this.maximum = this.calcMaximum()
    this.produceChange.calcAllChange()
    this.consumeChange.calcAllChange()
  }

  constructor(name:string) {
    this.name = name

  }
}

export const Resource:{[x:string]:ResourceClass} = {
  energy: new ResourceClass("energy"),
  iron: new ResourceClass("iron"),
  coal: new ResourceClass("coal"),
  water: new ResourceClass("water"),
  air: new ResourceClass("air"),
  copper: new ResourceClass("copper"),
}

/**
 * 各类任务使用Res的记录
 */
export interface ResourceChange {
  type: keyof typeof ResourceChangeTypes
  res: ResourceClass
  produce: boolean
  value: number
  canResChange: () => boolean
  doResChange: () => void
}

export class ResProduce implements ResourceChange {
  produce: boolean = true
  res: ResourceClass;
  type: keyof typeof ResourceChangeTypes
  canResChange: () => boolean;
  doResChange: () => void
  value: number;

  constructor(type: keyof typeof ResourceChangeTypes, res: keyof typeof Resource,
              value: number) {
    this.type = type
    this.res = Resource[res]
    this.value = value
    this.canResChange = function () {
      return this.res.canProduce(this.value)
    }
    this.doResChange = function () {
      this.res.produce(this.type, this.value)
    }

  }
}

export class ResCost implements ResourceChange {
  produce: boolean = false
  res: ResourceClass;
  type: keyof typeof ResourceChangeTypes
  canResChange: () => boolean;
  doResChange: () => void
  value: number;

  constructor(type: keyof typeof ResourceChangeTypes, res: keyof typeof Resource,
              value: number) {
    this.type = type
    this.res = Resource[res]
    this.value = value
    this.canResChange = function () {
      return this.res.canCost(this.value)
    }
    this.doResChange = function () {
      this.res.cost(this.type, this.value)
    }

  }
}