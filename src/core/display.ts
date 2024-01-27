import {player} from "./player.ts";

export const Display = {
  column:1,
  key:"resource",
  resource:true,
  task:false,
}

export function changeDisplay(key:keyof typeof Display,column:number):void {
  player.value.display.resource = key == "resource"
  player.value.display.task = key == "task"

  player.value.display.column = column
  console.log(key, column)
  player.value.display.key = key
}