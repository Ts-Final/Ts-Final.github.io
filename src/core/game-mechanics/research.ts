import {Research} from "../GameDataBase/research.ts";
import {player} from "../player";

export function calcLevelTime(research:Research) {
  return research.time * (research.timePow ** player.research[research.id-1][3])
}
