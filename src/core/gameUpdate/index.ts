import {resetResourceChange} from "../game-mechanics/resourceChange.ts";
import {updateTasks} from "./updateTasks.ts";
import {updateResearch} from "./updateResearch.ts";
import {updateResource} from "./updateResource.ts";
import {updateMarketUpgrade} from "./updateMarketUpgrade.ts";
import {player} from "../player";
import {save} from "../save.ts";

/**
 * 在每一个component的setup中应该有一个update的method
 * 并且根据分类加到下面的list中
 */
export const gameUpdateDisplays: Function[] = []

function updateDisplay() {
  for (let i = 0; i < gameUpdateDisplays.length; i++) {
    gameUpdateDisplays[i]()
  }

}

function updateFreshTime() {
  let date = new Date()
  date.setDate(date.getDate() + 1)
  player.dailyFreshTime = date.setHours(0, 0, 0, 0)
}

export function gameUpdate() {
  resetResourceChange()
  updateFreshTime()
  updateTasks()
  updateResearch()
  updateMarketUpgrade()

  updateResource()
  updateDisplay()
}

setInterval(gameUpdate, 1000)
setInterval(updateDisplay, 33)
setInterval(save, 10e3)