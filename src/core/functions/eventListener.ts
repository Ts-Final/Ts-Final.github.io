import {clearSave, save} from "../game-mechanics/save.ts";
import {notify} from "./notify.ts";
import {EventHub, GameEvent} from "../gameUpdate/eventHub.ts";

export function initListener() {
  document.addEventListener('keydown', function (e) {
      if (e.code === "KeyS" && e.ctrlKey) {
        save()
        e.preventDefault()
      } else if (e.code === "KeyM" && e.altKey) {
        EventHub.dispatch(GameEvent.MARKET_UPDATE)
        notify.success("市场价格/交易已刷新",1000)
        e.preventDefault()
      } else if (e.code === "Delete") {
        clearSave()
        notify.error("Save deleted", 1000)
      } else if (e.code === "KeyN" && e.altKey) {
        EventHub.dispatch(GameEvent.UPDATE_NEWS)
      }
    }
  )
}