import {GameDataBase} from "../GameDataBase";
import {player} from "../player";

export function updateMarketUpgrade () {
  for (let i = 0; i < GameDataBase.Market.Upgrade.length; i++) {
    let upgrade = GameDataBase.Market.Upgrade[i]
    player.market.upgrades[i][0] = upgrade.unlock

  }
}