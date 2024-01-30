import {ResCost, Resource, ResourceChange, ResProduce} from "../resource/Resource.ts";
import {KeyValue} from "../resource/types.ts";

/**
 * 一个将Task中KeyValue键值对转换为ResourceChange的东西
 * @param KVs {KeyValue<string,number>[]} 一堆KV
 * @param pro
 * @constructor
 */
function KVtoRC(KVs: KeyValue<keyof typeof Resource, number>[], pro: boolean):ResourceChange[] {
  let RC = []
  if (pro) {
    for (const kV of KVs) {
      RC.push(new ResProduce("task", kV[0], kV[1]))
    }
  }
  else {
    for (const kV of KVs) {
      RC.push(new ResCost("task", kV[0], kV[1]))
    }
  }
  return RC
}

export class TaskClass {
  readonly id: number
  title: string
  des: string
  itl: string
  produce: ResProduce[]
  cost: ResCost[]
  unlockCheck: () => boolean
  unlocked: boolean = false
  activated: boolean = false

  canProduce() {
    return this.produce.every((v) => v.canResChange())
  }

  canCost() {
    return this.cost.every((v) => v.canResChange())
  }

  doResChange() {
    this.cost.forEach((v) => v.doResChange())
    this.produce.forEach((v) => v.doResChange())
  }

  update() {
    if (!this.unlocked) {
      this.unlocked = this.unlockCheck()
    }
    if (!this.activated) {
      return
    }
    if (!this.canCost()) {
      return
    }
    if (!this.canProduce()) {
      return
    }
    this.doResChange()
  }

  changeActivate() {
    this.activated = !this.activated
    console.log("changed",this.title)
  }

  constructor(id: number,
              title: string,
              des: string,
              itl: string,
              produce: KeyValue<keyof typeof Resource, number>[],
              cost: KeyValue<keyof typeof Resource, number>[],
              unlockCheck: () => boolean) {
    this.id = id
    this.title = title
    this.des = des
    this.itl = itl
    this.produce = KVtoRC(produce, true)
    this.cost = KVtoRC(cost, false)
    this.unlockCheck = unlockCheck
  }
}