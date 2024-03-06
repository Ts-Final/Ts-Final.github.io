import {ResourceTypeEnum} from "../GameDataBase/resource.ts";

type resDict = {
  amount: number;
  max_record: number;

  change: number;
  maximum: number;
  affects: {
    maxAdd: [string, number][];
    maxMult: [string, number][];
    consume: [string, number][];
    pro: [string, number][]
  },
}

function getResourceDict(): resDict {
  /*function resChangeDict() {
    return {
      task: 0,
      research: 0,
      market: 0,
      tense: 0,

      get calcAllChange() {
        return this.task + this.research
      },
      set calcAllChange(value: number) {
        Object.assign(this, {
          task: value,
          research: 0,
          market: 0,
        })
      },
    }
  }*/

  function resAffectDict() {
    // Volar-Complainer here.
    return {
      pro: [] as [string, number][],
      consume: [] as [string, number][],
      maxAdd: [] as [string, number][],
      maxMult: [] as [string, number][],
    }
  }

  return {
    amount: 0, maximum: 1e4, change: 0,
    max_record: 0,
    /**
     * name, value(pow or anything)
     */
    affects: resAffectDict(),
  }
}

/**
 * jinitaimei
 */
export const resource: { [key in ResourceTypeEnum]: resDict } = {
  energy: getResourceDict(),
  iron: getResourceDict(),
  copper: getResourceDict(),
  air: getResourceDict(),
  water: getResourceDict(),
  coal: getResourceDict(),
}