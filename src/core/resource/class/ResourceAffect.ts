import {ResAffect, ResAffectTypes} from "../types.ts";
import {Resource} from "../Resource.ts";
import {Ref} from "vue";

export class ResourceAffect {
  readonly id: number
  name:string
  affect: ResAffect[]
  finished: Ref<boolean>

  /**
   *
   * @param id
   * @param name
   * @param finished 是否可以进行计算
   * @param affect 所有的affect
   */
  constructor(id:number,name:string, finished:Ref<boolean> , affect:ResAffect[]) {
    this.id = id
    this.name = name
    this.affect = affect
    this.finished = finished
    for (let i = 0; i < affect.length; i++) {
      Resource[affect[i][0]].affect.push(this)
    }
  }


  /**
   * 统计所有的RA的数值
   * @param res 要统计的Res类型
   * @param type 统计什么类型的Affect
   * @param RA 字面
   * @example
   * calcAllRA('energy', 'maxAdd', ...RAs) // 统计Energy中MaxAdd的数值，相加
   */
  static calcAllRA (res:keyof typeof Resource,
                    type:ResAffectTypes,
                    ...RA:ResourceAffect[]): number {
    let i = 0
    for (let j = 0; j < RA.length; j++) {
      for (let k = 0; k < RA[j].affect.length; k++) {
        if (RA[j].affect[k][0] != res) {continue}
        if (RA[j].affect[k][1] != type) {continue}
        if (!RA[j].finished.value) {continue}
        i += RA[j].affect[k][2]
      }
    }
    return i
  }
}