import {player} from "../../player";
import {ResourceTypes} from "../../GameDataBase/resource.ts";
import {calcResourceAffect} from "../../game-mechanics/resourceAffect.ts";
import {calcResourceMaximum} from "../../game-mechanics/resource.ts";

export function updateResource() {
  for (let key of Object.keys(player.resource)) {
    // These code seemed ugly, but Volar is a fuck that it will cause TYPE ERROR if i dont do that
    let key1 = key as ResourceTypes
    let key2 = key as keyof typeof player.resource
    player.resource[key2].affects.maxAdd = calcResourceAffect(key1, 'maxAdd').names
    player.resource[key2].affects.pro = calcResourceAffect(key1, "pro").names
    player.resource[key2].affects.consume = calcResourceAffect(key1, "consume").names
    player.resource[key2].affects.maxMult = calcResourceAffect(key1, 'maxMult').names
    player.resource[key2].maximum = calcResourceMaximum(key1)
    player.resource[key2].max_record =
      Math.max(player.resource[key2].max_record, player.resource[key2].amount)
  }
}