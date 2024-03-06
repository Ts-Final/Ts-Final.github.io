import {resetResourceChange} from "../../game-mechanics/resourceChange.ts";
import {updateTasks} from "./updateTasks.ts";
import {updateResearch} from "./updateResearch.ts";
import {updateResource} from "./updateResource.ts";
import {updateMarketUpgrade} from "./updateMarket.ts";

import {player} from "../../player";
import {gameUpdateDisplays} from "../updateDisplay.ts";
import {displayEnum} from "../../GameDataBase/display.ts";
import {GameDataBase} from "../../GameDataBase";
import {EventHub, GameEvent} from "../eventHub.ts";
import {notify} from "../../functions/notify.ts";

export function updateDisplay() {
  for (let i = 0; i < gameUpdateDisplays[player.display].length; i++) {
    gameUpdateDisplays[player.display][i]()
  }
  gameUpdateDisplays[displayEnum.baseLayouts].forEach((v) => v())


}

function updateFreshTime() {
  let date = new Date()
  date.setDate(date.getDate() + 1)
  player.dailyFreshTime = date.setHours(0, 0, 0, 0)
}


let h2pUnlocks: {[x:number]:boolean}= {}

function updateH2p() {
  for (const h2p of GameDataBase.How2Play) {
    if (h2p.id in h2pUnlocks) {
      // first unlock: h2p.unlock ->true, unlocks[i] -> false
      if (h2p.unlocked && !h2pUnlocks[h2p.id]) {
        EventHub.dispatch(GameEvent.UPDATE_H2P)
        notify.success(`unlock h2p ${h2p.title}`, 1000)
        h2pUnlocks[h2p.id] = true
      }
    } else {
      h2pUnlocks[h2p.id] = h2p.unlocked
    }
  }
}



export function gameLoop() {
  resetResourceChange()
  updateFreshTime()
  updateTasks()
  updateResearch()
  updateMarketUpgrade()

  updateH2p()

  updateResource()
}