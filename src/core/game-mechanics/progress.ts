import {player} from "../player";

/**
 *
 * @param req {[number, number]} 研究id，需求等级
 */
export function hasLeveledResearch(...req:[number, number][]){
  let result = true
  for (let i = 0; i < req.length; i++) {
    const id = req[i][0]
    const level = req[i][1]
    result = player.research[id-1][3] >= level && result
  }
  return result
}

export function hasBoughtUpgrade(...req:number[]) {
  let result = true
  for (let i = 0; i < req.length; i++) {
    const id = req[i]
    result = player.market.upgrades[id - 1][1] && result
  }
  return result
}