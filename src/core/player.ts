function getNumDict<T>(length: number, init: T) {
  const d: { [x: number]: T } = {}
  for (let i = 1; i < length + 1; i++) {
    d[i] = init
  }
  return d
}

function getResourceDict() {
  function resChangeDict() {
    return {
      task: 0,
      research: 0,


      get calcAllChange() {
        return this.task + this.research
      },
      set calcAllChange(p) {
        this.task = p
      }
    }
  }
  function resAffectDict() {
    // Volar-Complainer here.
    return {
      pro: [] as [string,number|string][],
      consume: [] as [string,number|string][],
      maxAdd: [] as [string,number|string][],
      maxMult: [] as [string,number|string][],
    }
  }

  return {
    amount: 100,
    maximum: 1e4,
    produceChange: resChangeDict(),
    costChange: resChangeDict(),
    /**
     * name, value(pow or anything)
     */
    affects: resAffectDict(),
  }
}

/**
 * jinitaimei
 */
export const resource = {
  energy: getResourceDict(),
  iron: getResourceDict(),
  copper: getResourceDict(),
  air: getResourceDict(),
  water: getResourceDict(),
  coal: getResourceDict(),
}
/**
 * activated, unlocked
 */
export const task =
  getNumDict<[boolean, boolean]>(1, [false, true])
/**
 * activated, unlocked, started, level
 */
export const research =
    getNumDict<[boolean, boolean, number, number]>
(10, [false, false, 0,  0])

export const player = {
  resource,
  task,
  research,

  /**
   * activated, unlocked, finished, time, level
   */

  story: getNumDict<[boolean]>(11, [false]),
  display: {
    resource: true,
    task: false,
    research: false,
    researchInf: false,
    storyMain: false,
    storySide: false,
    storyExtra: false,
    h2p:false,
  },
  version: "",
  record: {

  },
  how2play: 1
}

declare global {
  interface Window {
    player: any
  }
}

window["player"] = player
