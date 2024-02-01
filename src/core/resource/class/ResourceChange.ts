import {ResourceChangeTypes} from "../enums.ts";
import {ResourceClass} from "./ResourceClass.ts";
import {Resource} from "../Resource.ts";

/**
 * 各类任务使用Res的记录
 */
export interface ResourceChangeFace {
  type: keyof typeof ResourceChangeTypes
  res: ResourceClass
  produce: boolean
  value: number
  canResChange: () => boolean
  doResChange: () => void
}

export class ResourceChange implements ResourceChangeFace{
  produce: boolean
  res: ResourceClass;
  type: keyof typeof ResourceChangeTypes
  canResChange: () => boolean;
  doResChange: () => void
  value: number;

  /**
   *
   * @param type 是什么东西改变的资源
   * @param res 改变什么资源
   * @param value 改多少
   * @param produce 是不是产出
   */

  constructor(type: keyof typeof ResourceChangeTypes, res: keyof typeof Resource,
              value: number, produce:boolean) {
    this.type = type
    this.res = Resource[res]
    this.value = value
    this.produce = produce
    if (this.produce) {
      this.canResChange = function () {
        return this.res.canProduce(this.value)
      }
      this.doResChange = function () {
        this.res.produce(this.type, this.value)
      }
    }
    else {
      this.canResChange = function () {
        return this.res.canCost(this.value)
      }
      this.doResChange = function () {
        this.res.cost(this.type, this.value)
      }
    }

  }
}

export function canResourceChange(RCs:ResourceChangeFace[]) {
  return RCs.every((v) => v.canResChange())
}
export function doResourceChange(RCs:ResourceChangeFace[]) {
  RCs.forEach((v) => v.doResChange())
}
export class ResProduce extends ResourceChange{
  constructor(type: keyof typeof ResourceChangeTypes, res: keyof typeof Resource,
              value: number) {
    super(type, res, value, true)
  }
}

export class ResCost extends ResourceChange{
  constructor(type: keyof typeof ResourceChangeTypes, res: keyof typeof Resource,
              value: number) {
    super(type, res, value, false)
  }

}