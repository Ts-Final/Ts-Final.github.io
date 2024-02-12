// idk why this fuck works, but that worked anyway
import {ref} from "vue";
import {player} from "./player.ts";

export const displayRef = {
  resource: ref(true),
  task: ref(false),
  research: ref(false),
  researchInf: ref(false),
  storyMain: ref(false),
  storySide: ref(false),
  storyExtra: ref(false),
  h2p: ref(false),
}

export function changeDisplay(key: keyof typeof player.display) {
  for (const type of Object.keys(player.display)) {
    player.display[type as keyof typeof player.display] = (key == type)
    displayRef[type as keyof typeof player.display].value = (key == type)
  }
}