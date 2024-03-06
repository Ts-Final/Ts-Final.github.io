/*
// idk why this fuck works, but that worked anyway
import {Ref, ref} from "vue";
import {player} from "../player";
import {getObjectKeys} from "../functions/getObjectKeys.ts";
import {display, displayTabKeys} from "../player/display.ts";

function getDisplayRef() {
  let displayKeys = getObjectKeys(display)
  let obj = {} as {[key in typeof displayKeys]:Ref<boolean>}
  for (let i = 0; i < displayKeys.length; i++) {
    Object.defineProperty(obj, displayKeys[i], ref(displayKeys[i]))
  }
  return obj
}

export const displayRef = getDisplayRef()

export function changeDisplay(key: keyof typeof displayEnum) {
  for (const type in displayEnum) {
    player.display[type as keyof typeof player.display] = (key === type)
    displayRef[type as keyof typeof displayRef].value = (key === type)
  }
}*/
import {player} from "../player";

export function changeTab(tab:number) {
  player.display = tab
  console.log(tab)
}