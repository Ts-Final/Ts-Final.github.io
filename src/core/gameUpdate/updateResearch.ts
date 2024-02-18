import {GameDataBase} from "../GameDataBase";
import {player} from "../player";
import {canResourceChange, doResourceChange} from "../game-mechanics/resourceChange.ts";
import {calcLevelTime} from "../game-mechanics/research.ts";
import {clearAffectByName, registerAffect} from "../game-mechanics/resourceAffect.ts";
import {parseAffectName} from "../game-mechanics/parse.ts";
import {notify} from "../functions/notify.ts";

export function updateResearch() {
  for (let key = 0; key < GameDataBase.Researches.length; key++) {

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
      if (player.research[key][3] >= research.maxLevel) // 满级之后
      {
        player.research[key][0] = false
        notify.success(`完成研究：${research.name}`,2000)
      }
      else {
        notify.success(`研究升级：${research.name} Lv.${player.research[key][3]}`, 2000)
      }
      const name = parseAffectName('research', research.name)
      clearAffectByName(name)
      for (let i = 0; i < research.affect.length; i++) {
        const affect = research.affect[i]
        registerAffect(affect[0], affect[1], affect[2] * player.research[key][3], name)
      }
    }

  }
}