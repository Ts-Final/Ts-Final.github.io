import {calcResourceAffect as calcRA} from "./resourceAffect.ts";
import {ResourceTypes} from "../GameDataBase/resource.ts";

/**
 * 计算当前max
 * @param key
 */
export function calcResourceMaximum(key:ResourceTypes) {
  return (1e4 + calcRA(key, 'maxAdd').v) *
    (1 + calcRA(key, 'maxMult').v)
}