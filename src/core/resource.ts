import {ResourceTypes} from "./GameDataBase/types.ts";
import {ValueNotFoundError} from "./functions/Arrays.ts";
import {calcResourceAffect as calcRA} from "./resourceAffect.ts";

export function parseResourceName(key: ResourceTypes) {
  switch (key) {
    case "energy": return "能量"
    case "copper": return  "铜"
    case "air": return "空气"
    case "coal":return "煤"
    case "iron":return "铁"
    case "water": return  "水"
    default: throw new ValueNotFoundError(`什么resource名字：${key}`)
  }
}

/**
 * 计算当前max
 * @param key
 */
export function calcResourceMaximum(key:ResourceTypes) {
  return (1e4 + calcRA(key, 'maxAdd').v) *
    calcRA(key, 'maxMult').v
}