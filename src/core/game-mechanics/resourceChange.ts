import {player} from "../player";
import {calcResourceAffect as calc} from "./resourceAffect.ts";
import {ResourceTypes} from "../GameDataBase/resource.ts";


/**
 * 检查一下能不能产出、消耗
 * @param res
 * @param value
 * @param produce
 */
export function canResourceChange(res: ResourceTypes, value: number, produce: boolean) {
  const Res = player.resource[res] // same pointer 同一个指针
  if (produce) {
    return Res.amount + value * (1 + calc(res, 'pro').v) <= Res.maximum
  } else {
    return Res.amount - value * (1 - calc(res, "consume").v) >= 0
  }
}

export function doResourceChange(res: ResourceTypes,
                                 value: number,
                                 produce: boolean,) {
  const Res = player.resource[res] // same pointer 同一个指针
  if (produce) {
    Res.amount += value * (1 + calc(res, 'pro').v)
    Res.change += value * (1 + calc(res, 'pro').v)
  } else {
    Res.amount -= value * (1 - calc(res, 'consume').v)
    Res.change -= value * (1 - calc(res, 'consume').v)
  }
}

export function resetResourceChange() {
  for (const key in player.resource) {
    let v = player.resource[key as keyof typeof player.resource]
    v.change = 0
  }
}