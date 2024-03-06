import {player} from "../player";
import {notify} from "../functions/notify.ts";
import {generateMarket} from "../player/market.ts";

export function save() {
  notify.normal("游戏已保存", 500)
  player.saveTime = Date.now()
  localStorage.setItem('TerminalSociety', JSON.stringify(player))
}

export function clearSave() {
  localStorage.clear()
}

export function load(isLocal = false) {
  let str = localStorage.getItem('TerminalSociety')
  if (str != null) {
    const obj = JSON.parse(str)
    Object.assign(player, obj)
  }
  if (Date.now() >= player.dailyFreshTime) {
    generateMarket()
  }
  player.dev = isLocal

}

