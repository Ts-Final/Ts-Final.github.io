import {player} from "./player.ts";

export const Display = {
  key:"resource",

  resource:true,
  task:false,
}

export function changeDisplay(key:keyof typeof Display):void {
  player.value.display.resource = key == "resource"
  player.value.display.task = key == "task"

  player.value.display.key = key
}