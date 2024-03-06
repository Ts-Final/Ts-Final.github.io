import {resource} from "./resource.ts";
import {research, task} from "./numArrays.ts";
import {market} from "./market.ts";
import {GameDataBase} from "../GameDataBase";


export const player = {
  resource,
  task,
  research,
  display: 1,
  market,
  version: GameDataBase.version,
  how2play: 1,
  money: 0,
  saveTime: 0,
  dailyFreshTime: 0,
  dev: false,

}

declare global {
  interface Window {
    player: any
  }
}

window["player"] = player
