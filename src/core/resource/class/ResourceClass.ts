import {ResourceChangeTypes} from "../enums.ts";
import {Ref, ref} from "vue";
import {ResourceAffect} from "./ResourceAffect.ts";

/**
 * Resource消耗类型的记录
 */
export class ResourceChangeData {
  task: number = 0
  research: number = 0

  allChange: Ref<number> = ref(0)

  calcAllChange() {
    this.allChange.value = this.task + this.research
    this.task = 0
    this.research = 0
  }
}

export class ResourceClass {
  name: string
  amount: Ref<number> = ref(0)
  maximum: Ref<number> = ref(0)

  calcMaximum(): number {
    return 10000 *
      (1 + ResourceAffect.calcAllRA(this.name, 'maxMult', ...this.affect))
      + ResourceAffect.calcAllRA(this.name, 'maxAdd', ...this.affect)
  }

  previous: number = 0
  affect: ResourceAffect[] = []
  produceChange = new ResourceChangeData
  consumeChange = new ResourceChangeData

  produce(type: keyof typeof ResourceChangeTypes, value: number): void {
    let finalValue = value *
      (1 + ResourceAffect.calcAllRA(this.name, 'pro', ...this.affect))
    this.produceChange[type] += finalValue
    this.amount.value += finalValue
  }

  cost(type: keyof typeof ResourceChangeTypes, value: number): void {
    let finalValue = value *
      (1 - ResourceAffect.calcAllRA(this.name, 'consume', ...this.affect))
    this.consumeChange[type] += finalValue
    this.amount.value -= finalValue
  }

  canProduce(value: number): boolean {
    return value *
      (1 +ResourceAffect.calcAllRA(this.name, 'pro', ...this.affect))
        + this.amount.value <= this.maximum.value
  }

  canCost(value: number): boolean {
    return value
      * (1 - ResourceAffect.calcAllRA(this.name, 'consume',
        ...this.affect)) <= this.amount.value
  }

  update(): void {
    this.maximum.value = this.calcMaximum()
    this.produceChange.calcAllChange()
    this.consumeChange.calcAllChange()
  }

  constructor(name: string) {
    this.name = name

  }

   registerAffect (RA: ResourceAffect) {
    this.affect.push(RA)
   }
}

