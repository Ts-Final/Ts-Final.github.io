import {player} from "./player";
import {deepSet} from "./functions/deepSet.ts";
import {notify} from "./functions/notify.ts";
import {generateMarket} from "./player/market.ts";
import {initListener} from "./functions/eventListener.ts";

export function save() {
  notify.normal("游戏已保存", 500)
  player.saveTime = Date.now()
  localStorage.setItem('TerminalSociety', JSON.stringify(player))
}

export function load() {
  let str = localStorage.getItem('TerminalSociety')
  if (str != null) {
    const obj = JSON.parse(str)
    deepSet(obj, player)
    if (Date.now() >= player.dailyFreshTime) {
      generateMarket()
    }
  }
  initListener()
}

