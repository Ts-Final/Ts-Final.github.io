import {player} from "../player";
import {GameDataBase} from "../GameDataBase";
import {doResourceChange} from "./resourceChange.ts";
import {ValueNotFoundError} from "../functions/errors.ts";

export function canPurchaseUpgrade(id:number) {
  const upgrade = GameDataBase.Market.Upgrade.find((v)=>v.id == id)
  if (!upgrade) {
    throw new ValueNotFoundError(`什么upg id ${id}`)
  }

  let canPurchase;
  canPurchase = player.money >= upgrade.costMoney
  for (let i = 0; i < upgrade.costResource.length; i++) {
    let cost = upgrade.costResource[i]
    canPurchase = player.resource[cost[0]].amount >= cost[1] && canPurchase
  }
  return canPurchase
}
export function purchaseUpgrade(id:number,canPurchase:boolean) {
  if (!canPurchase) {return}
  const upgrade = GameDataBase.Market.Upgrade.find((v)=>v.id == id)
  if (!upgrade) {
    throw new ValueNotFoundError(`什么upg id ${id}`)
  }
  player.market.upgrades[id-1][1] = true
  for (let i = 0; i < upgrade.costResource.length; i++) {
    let [resType, value] = upgrade.costResource[i]
    doResourceChange(resType, value, false)
  }
  player.money -= upgrade.costMoney
}

