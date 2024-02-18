import {save} from "../save.ts";
import {generateMarket} from "../player/market.ts";
import {player} from "../player";
import {notify} from "./notify.ts";

export function initListener() {
  document.addEventListener('keydown', function (e) {
      if (e.code === "KeyS" && e.ctrlKey) {
        save()
        e.preventDefault()
      }
      if (e.code === "KeyM" && e.altKey) {
        generateMarket()
        notify.success("市场价格/交易列表已刷新", 1500)
        console.log(player.market.exchange)
        e.preventDefault()
      }
    }
  )
}