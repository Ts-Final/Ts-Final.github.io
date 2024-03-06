import {player} from "../player";
import {doResourceChange} from "./resourceChange.ts";
import {Status, status} from "../functions/status.ts";

export function canBuyExchange(index: number, value: number): status {
  value = Number(value)
  if (index > player.market.exchange.length - 1) {return Status.e}
  const [, , max, bought, prize]
    = player.market.exchange[index]
  if (bought + value > max) {
    return Status.n
  }
  return prize * value <= player.money ? Status.y: Status.n
}

export function canSellExchange(index: number, value: number): status {
  value = Number(value)
  if (index > player.market.exchange.length - 1) {return Status.e}
  const [, resType]
    = player.market.exchange[index]
  if (resType == undefined) {return Status.e}
  return player.resource[resType].amount >= value ? Status.y: Status.n
}


export function doBuyExchange(index: number, value: number, canExchange: boolean) {
  value = Number(value)
  if (!canExchange) {
    return
  }
  const [, resType, , , prize]
    = player.market.exchange[index]
  player.money -= value * prize
  player.market.exchange[index][3] += value

  doResourceChange(resType, value, true)
}

export function doSellExchange(index: number, value: number, canExchange: boolean) {
  value = Number(value)
  if (!canExchange) {
    return
  }
  const [, resType,, , prize]
    = player.market.exchange[index]
  player.money += value * prize

  doResourceChange(resType, value, false)
}
