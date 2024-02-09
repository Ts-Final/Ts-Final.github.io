import {ref, Ref} from "vue";
import {canResourceChange, doResourceChange, ResCost} from "../resource/class/ResourceChange.ts";
import {KeyValue, ResAffect} from "../resource/types.ts";
import {Resource} from "../resource/Resource.ts";
import {KVtoRC} from "../task/class.ts";
import {ResourceAffect} from "../resource/class/ResourceAffect.ts";

export class ResearchClass extends ResourceAffect {
  readonly id: number
  name: string
  des: string
  itl: string
  activated: Ref<boolean>
  costResource: ResCost[]
  time: number
  unlocked: Ref<boolean>
  unlock: () => boolean
  started: Ref<number>

  constructor(id: number,
              name: string,
              des: string,
              itl: string,
              cost: KeyValue<keyof typeof Resource, number>[],
              affect: ResAffect[],
              time: number,
              unlock: () => boolean,
  ) {
    super(id, name, ref(false),affect)
    this.id = id
    this.name = name
    this.des = des
    this.itl = itl
    this.costResource = KVtoRC(cost, false, 'research')
    this.time = time
    this.unlock = unlock
    this.activated = ref(false)
    this.unlocked = ref(false)
    this.started = ref(0)
  }

  canCost() {
    return canResourceChange(this.costResource)
  }

  doCost() {
    doResourceChange(this.costResource)
  }

  update() {
    if (!this.unlocked.value) {
      this.unlocked.value = this.unlock()
      return
    }
    if (!this.activated.value) {
      return
    }
    console.log(this)
    if (!this.canCost()) {
      return
    }
    this.doCost()
    this.started.value += 1
    if (this.started.value >= this.time) {
      this.finished.value = true
      this.activated.value = false
    }
  }

  changeActivate() {
    this.activated.value = !this.activated.value
  }
}

export class ResearchInfClass extends ResearchClass {
  level: Ref<number> = ref(0)
  timePow: number

  constructor(id: number,
              name: string,
              des: string,
              itl: string,
              cost: KeyValue<keyof typeof Resource, number>[],
              affect: ResAffect[],
              time: number,
              unlock: () => boolean,
              timePow: number) {
    super(id, name, des, itl, cost, affect, time, unlock,);
    this.timePow = timePow
  }
  update() {
    if (!this.unlocked.value) {
      this.unlocked.value = this.unlock()
      return
    }
    if (!this.activated.value) {
      return
    }
    console.log(this)
    if (!this.canCost()) {
      return
    }
    this.doCost()
    this.started.value += 1
    if (this.started.value >= this.time) {
      this.level.value += 1
      this.time *= this.timePow
    }
  }
}