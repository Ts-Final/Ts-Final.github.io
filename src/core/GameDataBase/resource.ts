export enum ResourceTypeEnum {
  energy = "energy",
  iron = "iron",
  copper = 'copper',
  air = 'air',
  water = 'water',
  coal = "coal",
}

/**
 * 资源类型
 */
export type ResourceTypes = keyof typeof ResourceTypeEnum

/**
 * 对Resource影响的类型
 * 消耗/产出/最大值
 */
export type ResAffectTypes = 'consume' | 'pro' | 'maxAdd' | 'maxMult'

/**
 * 用于表示（比如Research对Resource的产出等）倍率的Affect
 * @example
 * ['energy', 'pro', 1.1] //Energy Production +10%
 * ['iron', 'maxAdd', 1e3] //Iron Maximum +1e3
 */
export type ResAffect = [ResourceTypes, ResAffectTypes, number]

export type ResourceChangeType = 'task' | 'research' | 'market'