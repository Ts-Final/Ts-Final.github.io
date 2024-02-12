import {GameDataBase} from "./GameDataBase";
import {player} from "./player.ts";
import {canResourceChange, doResourceChange, resetResourceChange} from "./resourceChange.ts";
import {calcResourceAffect, clearAffectByName, parseAffectName, registerAffect} from "./resourceAffect.ts";
import {ResourceTypes} from "./GameDataBase/types.ts";
import {calcLevelTime} from "./research.ts";
import {calcResourceMaximum} from "./resource.ts";

/**
 * 在每一个component的setup中应该有一个update的method
 * 并且根据分类加到下面的list中
 */
export const gameUpdateDisplays: { [x: string]: Function[] } = {
  resource: [],
  task: [],
  research: [],
  h2p: [],
}

function updateDisplay() {
  for (const handlerKey in gameUpdateDisplays) {
    for (let i = 0; i < gameUpdateDisplays[handlerKey].length; i++) {
      gameUpdateDisplays[handlerKey][i]()
    }
  }
}

function updateTasks() {
  for (const key in GameDataBase.Tasks) {
    const task = GameDataBase.Tasks[key]
    // unlock check
    if (!player.task[key][1]) {
      player.task[key][1] = task.unlock
    }
    // activate check
    if (!player.task[key][0]) {
      continue
    }

    // About Resources
    // these code seems absolutely ugly
    let canProduce = true
    for (let i = 0; i < task.produce.length; i++) {
      let produce = task.produce[i]
      if (!canResourceChange(produce[0], produce[1], true)) {
        canProduce = false
      }
    }
    if (!canProduce) {
      continue
    }
    for (let i = 0; i < task.cost.length; i++) {
      let cost = task.cost[i]
      if (!canResourceChange(cost[0], cost[1], false)) {
        canProduce = false
      }
    }
    if (!canProduce) {
      continue
    }

    for (let i = 0; i < task.produce.length; i++) {
      let produce = task.produce[i]
      doResourceChange(produce[0], produce[1], true, 'task')
    }
    for (let i = 0; i < task.cost.length; i++) {
      let cost = task.cost[i]
      doResourceChange(cost[0], cost[1], false, 'task')
    }

  }
}

function updateResearch() {
  for (const key in GameDataBase.Researches) {
    const research = GameDataBase.Researches[key]
    // unlock check
    if (!player.research[key][1]) {
      player.research[key][1] = research.unlock
    }

    // activate check
    if (!player.research[key][0]) {
      continue
    }

    // Resources
    let canProduce = true
    for (let i = 0; i < research.cost.length; i++) {
      let cost = research.cost[i]
      if (!canResourceChange(cost[0], cost[1], false)) {
        canProduce = false
      }
    }
    if (!canProduce) {
      continue
    }

    for (let i = 0; i < research.cost.length; i++) {
      let cost = research.cost[i]
      doResourceChange(cost[0], cost[1], false, 'research')
    }

    player.research[key][2] += 1 // time++
    if (player.research[key][2] >= calcLevelTime(research)) {
      player.research[key][3] += 1 // level++
      player.research[key][2] = 0
      if (player.research[key][3] >= research.maxLevel) {
        player.research[key][0] = false
      }
      const name = parseAffectName('research', research.name)
      clearAffectByName(name)
      for (let i = 0; i < research.affect.length; i++) {
        const affect = research.affect[i]
        registerAffect(affect[0],affect[1],affect[2]*player.research[key][3], name)
      }
    }

  }
}

function updateResource() {
  for (let key of Object.keys(player.resource)) {
    // These code seemed ugly, but Volar is a fuck that it will cause TYPE ERROR if i dont do that
    let key1 = key as ResourceTypes
    let key2 = key as keyof typeof player.resource
    player.resource[key2].affects.maxAdd = calcResourceAffect(key1, 'maxAdd').names
    player.resource[key2].affects.pro = calcResourceAffect(key1, "pro").names
    player.resource[key2].affects.consume = calcResourceAffect(key1,"consume").names
    player.resource[key2].affects.maxMult = calcResourceAffect(key1, 'maxMult').names
    player.resource[key2].maximum = calcResourceMaximum(key1)
  }
}

export function gameUpdate() {
  resetResourceChange()
  updateTasks()
  updateResearch()

  updateResource()
  updateDisplay()
}

setInterval(gameUpdate, 1000)
setInterval(updateDisplay, 33)