import {ResAffectTypes, ResourceTypes} from "./GameDataBase/types.ts";
import {player} from "./player.ts";
import {NotImplementedError} from "./functions/errors.ts";

/**
 * 存储所有对Res生产消耗影响的东西
 * number为百分比，别太炸裂
 */
export const ResourceAffects: [ResourceTypes, ResAffectTypes, number, string][] = []

export type affectSource = 'research'|"NMP"

/**
 * 将各种影响（只做了research但无关紧要）编译成文字（？
 * @example
 * parseAffectName('research','太阳能扩张') -> "研究:太阳能扩张"
 *
 * @param type
 * @param name
 */
export function parseAffectName(type:affectSource, name:string) {
  switch (type) {
    case "research":return `研究:${name}` ;
    case "NMP": throw new NotImplementedError()
  }
}

/**
 * 研究完成的时候调用，全部装进去
 * @example
 * register('energy', 'pro', 0.05, parseAffectName(...))
 * 使用parse是为了方便按名字删除的时候处理
 *
 * @param ResType
 * @param affectType
 * @param value
 * @param name
 */
export function registerAffect(ResType: ResourceTypes|keyof typeof player.resource,
                               affectType: ResAffectTypes,
                               value: number,
                               name: string) {
  ResourceAffects.push([ResType, affectType, value, name])
}

/**
 * 指定的资源类型、影响类型->一个倍率
 * @param ResType
 * @param affectType
 */
export function calcResourceAffect(ResType: ResourceTypes,
                                   affectType: ResAffectTypes) {
  let v = 0
  let RAs: [string, number][] = []
  for (let i = 0; i < ResourceAffects.length; i++) {
    if (ResourceAffects[i][0] == ResType && ResourceAffects[i][1] == affectType) {
      v += ResourceAffects[i][2] // value相加
      RAs.push([ResourceAffects[i][3], ResourceAffects[i][2]]) // 记个名字
    }
  }
  return {v: v, names: RAs}
}

export function clearAffectByName(name:string) {
  for (let i = 0; i < ResourceAffects.length; i++) {
    if (ResourceAffects[i][3] == name) {
      ResourceAffects.splice(i,1)
    }
  }
}