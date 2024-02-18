import {ResourceChangeType, ResourceTypeEnum} from "../GameDataBase/resource.ts";

type resDict = {
  amount: number;
  produceChange: {[key in ResourceChangeType|'calcAllChange']:number};
  costChange: { task: number; calcAllChange: number; research: number };
  maximum: number;
  affects: {
    maxAdd: [string, number][];
    maxMult: [string, number][];
    consume: [string, number][];
    pro: [string, number][]
  }
}

function getResourceDict(): resDict{
  function resChangeDict() {
    return {
      task: 0,
      research: 0,
      market: 0,

      get calcAllChange() {
        return this.task + this.research
      }, set calcAllChange(p) {
        this.task = p
      }
    }
  }

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
    amount: 0, maximum: 1e4, produceChange: resChangeDict(), costChange: resChangeDict(),
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