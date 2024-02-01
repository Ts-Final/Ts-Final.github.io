
import {KeyValue} from "../resource/types.ts";
import {Ref, ref} from "vue";
import {Resource} from "../resource/Resource.ts";
import {
  canResourceChange,
  doResourceChange,
  ResCost,
  ResourceChangeFace,
  ResProduce
} from "../resource/class/ResourceChange.ts";
import {ResourceChangeTypes} from "../resource/enums.ts";

/**
 * 一个将Task中KeyValue键值对转换为ResourceChange的东西
 * @param KVs {KeyValue<string,number>[]} 一堆KV
 * @param pro
 * @param type
 * @constructor
 */
export function KVtoRC(KVs: KeyValue<keyof typeof Resource, number>[],
                       pro: boolean,
                       type:keyof typeof ResourceChangeTypes = "task"):ResourceChangeFace[] {
  let RC = []
  if (pro) {
    for (const kV of KVs) {
      RC.push(new ResProduce(type, kV[0], kV[1]))
    }
  }
  else {
    for (const kV of KVs) {
      RC.push(new ResCost(type, kV[0], kV[1]))
    }
  }
  return RC
}

export class TaskClass {
  readonly id: number
  name: string
  des: string
  itl: string
  produce: ResProduce[]
  cost: ResCost[]
  unlockCheck: () => boolean
  unlocked: Ref<boolean> = ref(false)
  activated: Ref<boolean> = ref(false)

  canProduce() {
    return canResourceChange(this.produce)
  }

  canCost() {
    return canResourceChange(this.cost)
  }

  doResChange() {
    doResourceChange(this.cost)
    doResourceChange(this.produce)
  }

  update() {
    if (!this.unlocked.value) {
      this.unlocked.value = this.unlockCheck()
    }
    if (!this.activated.value) {
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
    this.activated.value = !this.activated.value
    console.log("changed",this.name)
  }

  constructor(id: number,
              title: string,
              des: string,
              itl: string,
              produce: KeyValue<keyof typeof Resource, number>[],
              cost: KeyValue<keyof typeof Resource, number>[],
              unlockCheck: () => boolean) {
    this.id = id
    this.name = title
    this.des = des
    this.itl = itl
    this.produce = KVtoRC(produce, true)
    this.cost = KVtoRC(cost, false)
    this.unlockCheck = unlockCheck
  }
}