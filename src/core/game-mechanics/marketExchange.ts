import {player} from "../player";
import {doResourceChange} from "./resourceChange.ts";

export function canBuyExchange(index: number, value: number): boolean {
  const [, , max, bought, prize]
    = player.market.exchange[index]
  if (bought + value > max) {
    return false
  }
  return prize * value <= player.money
}

export function canSellExchange(index: number, value: number): boolean {
  const [, resType]
    = player.market.exchange[index]
  return player.resource[resType].amount >= value
}


export function doBuyExchange(index: number, value: number, canExchange: boolean) {
  if (!canExchange) {
    return
  }
  const [, resType,, , prize]
    = player.market.exchange[index]
  player.money -= value * prize
  player.market.exchange[index][2] -= value
  player.market.exchange[index][3] += value

  doResourceChange(resType, value, true, 'market')
}

export function doSellExchange(index: number, value: number, canExchange: boolean) {
  if (!canExchange) {
    return
  }
  const [, resType,, , prize]
    = player.market.exchange[index]
  player.money += value * prize
  player.market.exchange[index][2] += value
  player.market.exchange[index][3] -= value

  doResourceChange(resType, value, false, 'market')
}
