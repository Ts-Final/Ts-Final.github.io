import {getNumArray} from "./generator.ts";
import {GameDataBase} from "../GameDataBase";
import {ResourceTypes} from "../GameDataBase/resource.ts";
import {randomElements, randomNumber} from "../functions/random.ts";
import {player} from "./index.ts";


/**
 * Sets value of
 * ```
 * player.market.exchange
 * ```
 * @borrows {player.market.exchange}
 */
export function generateExchange() {
  let v: [string, ResourceTypes, number, number, number][] = []

  v.push(["???", "energy", 1000, 0, 0.2])
  for (const company of GameDataBase.Market.Company) {
    const sellResourceTypes = randomElements(company.allResource)

    for (let i = 0; i < sellResourceTypes.length; i++) {
      const resKey = sellResourceTypes[i]
      const isADV = resKey in company.advantage
      let amount = isADV ? randomNumber(...company.advPow) : randomNumber(0.95, 1.05)
      amount *= company.baseAmount
      let price = player.market.basePrice[resKey as ResourceTypes]
      price *= randomNumber(0.9, 1.05)

      let arr = [company.name, resKey, amount, 0, price]
      let fail = false
      arr.forEach((v) => fail = fail || v == undefined)
      if (fail) {
        continue
      }

      v.push([company.name, resKey, amount, 0, price])
    }
  }
  return v
}

/**
 * Sets value of
 * ```
 * player.market.basePrice
 * ```
 */
export function generateBasePrice() {
  return {
    energy: randomNumber(0.5, 0.7),
    iron: randomNumber(12, 16),
    water: randomNumber(2, 3),
    coal: randomNumber(8, 11),
    copper: randomNumber(15, 19),
    air: 0,
  }
}

export function generateMarket() {
  player.market.exchange = generateExchange()
  player.market.basePrice = generateBasePrice()
}

export const market = {
  affect: 0,
  /**
   * Unlocked, bought
   */
  upgrades: getNumArray<[boolean, boolean]>
  (GameDataBase.Market.Upgrade.length, [false, false]),

  /**
   * ```
   * {
   * 0:unlocked,
   * 1:relation,
   * }
   * ```
   */
  company: getNumArray<[boolean, number]>(GameDataBase.Market.Company.length, [false, 0]),

  /**
   * ```
   * {
   *   0:company,
   *   1:Type,
   *   2:sellAmountMax // 库存量
   *   3:boughtAmount // 已买量
   *   4:price // 价格
   * }
   * ```
   */
  exchange: [] as [string, ResourceTypes, number, number, number][],

  basePrice: {
    energy: randomNumber(0.5, 0.7),
    iron: randomNumber(12, 16),
    water: randomNumber(2, 3),
    coal: randomNumber(8, 11),
    copper: randomNumber(15, 19),
    air: 0,
  }

}