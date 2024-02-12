import {ResourceChangeType, ResourceTypes} from "./GameDataBase/types.ts";
import {player, resource} from "./player.ts";
import {calcResourceAffect as calc} from "./resourceAffect.ts";


/**
 * 检查一下能不能产出、消耗
 * TODO: 加入param type:ResourceChangeType，有些东西不适用直接加减
 * TODO: 简单加入Research的调控作用
 * @param res
 * @param value
 * @param produce
 */
export function canResourceChange(res:ResourceTypes, value:number, produce:boolean) {
  const Res = player.resource[res] // same pointer 同一个指针
  if (produce) {
    return Res.amount + value * (1 + calc(res, 'pro').v) <= Res.maximum
  }
  else {
    return Res.amount - value * (1 - calc(res, "consume").v) >= 0
  }
}

export function doResourceChange(res:ResourceTypes,
                                 value:number,
                                 produce:boolean,
                                 type:ResourceChangeType) {
  const Res = player.resource[res] // same pointer 同一个指针
  if (produce) {
    Res.amount += value * (1+calc(res, 'pro').v)
    Res.produceChange[type] += value* (1+calc(res, 'pro').v)
  }
  else {
    Res.amount -= value * (1- calc(res,'consume').v)
    Res.costChange[type] += value * (1- calc(res,'consume').v)
  }
}

export function resetResourceChange() {
  for (const key in resource) {
    let v = resource[key as keyof typeof resource]
    for (const key in v.produceChange) {
      v.produceChange[key as keyof typeof v.produceChange] = 0
      v.costChange[key as keyof typeof v.costChange] = 0
    }
  }
}