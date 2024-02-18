import {ResAffectTypes, ResourceTypes} from "../GameDataBase/resource.ts";

/**
 * 存储所有对Res生产消耗影响的东西
 * number为百分比，别太炸裂
 */
export const ResourceAffects: [ResourceTypes, ResAffectTypes, number, string][] = []

export type affectSource = 'research'|"NMP"

/**
 * 研究完成的时候调用，全部装进去
 * @example
 * register('energy', 'pro', 0.05, parseAffectName(...))
 * 使用parse是为了方便按名字删除的时候处理
 *
 * @param resType
 * @param affectType
 * @param value
 * @param name
 */
export function registerAffect(resType: ResourceTypes,
                               affectType: ResAffectTypes,
                               value: number,
                               name: string) {
  ResourceAffects.push([resType, affectType, value, name])
}

/**
 * 指定的资源类型、影响类型->一个倍率
 * @param resType
 * @param affectType
 */
export function calcResourceAffect(resType: ResourceTypes,
                                   affectType: ResAffectTypes) {
  let v = 0
  let RAs: [string, number][] = []
  for (let i = 0; i < ResourceAffects.length; i++) {
    if (ResourceAffects[i][0] === resType && ResourceAffects[i][1] === affectType) {
      v += ResourceAffects[i][2] // value相加
      RAs.push([ResourceAffects[i][3], ResourceAffects[i][2]]) // 记个名字
    }
  }
  return {v: v, names: RAs}
}

export function clearAffectByName(name:string) {
  for (let i = 0; i < ResourceAffects.length; i++) {
    if (ResourceAffects[i][3] === name) {
      ResourceAffects.splice(i,1)
    }
  }
}