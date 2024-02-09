import {ref, Ref} from "vue";
import {ResAffectTypes, ResourceTypes} from "./types.ts";

// export class ResourceAffect {
//   readonly id: number
//   name:string
//   affect: ResAffect[]
//   finished: Ref<boolean>
//   static AllRA :ResourceAffect[]= []
//
//   /**
//    *
//    * @param id
//    * @param name
//    * @param finished 是否可以进行计算
//    * @param affect 所有的affect
//    */
//   constructor(id:number,name:string, finished:Ref<boolean> , affect:ResAffect[]) {
//     this.id = id
//     this.name = name
//     this.affect = affect
//     this.finished = finished
//     ResourceAffect.AllRA.push(this)
//   }
//
//
//   /**
//    * 统计所有的RA的数值
//    * @param res 要统计的Res类型
//    * @param type 统计什么类型的Affect
//    * @param RA 字面
//    * @example
//    * calcAllRA('energy', 'maxAdd', ...RAs) // 统计Energy中MaxAdd的数值，相加
//    */
//   static calcAllRA (res:keyof typeof Resource,
//                     type:ResAffectTypes,
//                     ...RA:ResourceAffect[]): number {
//     let i = 0
//     for (let j = 0; j < RA.length; j++) {
//       for (let k = 0; k < RA[j].affect.length; k++) {
//         if (RA[j].affect[k][0] != res) {continue}
//         if (RA[j].affect[k][1] != type) {continue}
//         if (!RA[j].finished.value) {continue}
//         i += RA[j].affect[k][2]
//       }
//     }
//     return i
//   }
// }
export const RAcollection:{[x:ResourceTypes]:{[y:ResAffectTypes]:ResourceAffect[]}} = {}

export class ResourceAffect {
  name:string
  finished: Ref<boolean>
  affectRes: ResourceTypes
  affectType: ResAffectTypes
  pow: number
  static AllRAs :ResourceAffect[]= []

  /**
   * 对Res的各种影响
   * @param name
   * @param finished
   * @param affectRes
   * @param affectType
   * @param pow
   */
  constructor(name:string, finished:boolean,
              affectRes: ResourceTypes,
              affectType: ResAffectTypes,
              pow: number) {
    this.name = name
    this.finished = ref(finished)
    this.affectRes = affectRes
    this.affectType = affectType
    this.pow = pow
    ResourceAffect.AllRAs.push(this)
  }

  static getResourceAffect(resType:ResourceTypes, affType:ResAffectTypes) {
    let A:ResourceAffect[] = []
    for (const ra of ResourceAffect.AllRAs) {
      if(ra.affectRes == resType && ra.affectType == affType){
        A.push(ra)
      }
    }
    return A
  }

  static calcAllRA(resType:ResourceTypes, affType:ResAffectTypes) {
    const RAs = this.getResourceAffect()
  }
}