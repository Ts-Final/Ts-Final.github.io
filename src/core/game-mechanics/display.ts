// idk why this fuck works, but that worked anyway
import {Ref, ref} from "vue";
import {displayEnum} from "../player/display.ts";
import {player} from "../player";

export const displayRef: { [key in displayEnum]: Ref<boolean> } = {
  resourceGeneral: ref(true),
  resourceDetail: ref(false),
  task: ref(false),
  research: ref(false),
  storyMain: ref(false),
  storySide: ref(false),
  storyExtra: ref(false),
  h2p: ref(false),
  marketUpgrade: ref(false),
  marketPrice: ref(false),
  marketExchange : ref(false),
  marketCompany: ref(false)
}

export function changeDisplay(key: keyof typeof displayEnum) {
  for (const type in displayEnum) {
    player.display[type as keyof typeof player.display] = (key === type)
    displayRef[type as keyof typeof displayRef].value = (key === type)
  }
}