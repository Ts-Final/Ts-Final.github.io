import {load, save} from "./game-mechanics/save.ts";
import {initListener} from "./functions/eventListener.ts";
import {EventHub} from "./gameUpdate/eventHub.ts";
import {GameEvent} from "./gameUpdate/gameEvent.ts";


function initIntervals() {
  setInterval(() => EventHub.dispatch(GameEvent.UPDATE), 1000)
  setInterval(() => EventHub.update(), 33)
  setInterval(save, 10e3)
}

// function isLocal() {
//   const href = window.location.href
//   return href.includes("127.0.0.1") || href.includes("localhost")
// }

export function init() {
  load(false)
  initIntervals()
  initListener()

}