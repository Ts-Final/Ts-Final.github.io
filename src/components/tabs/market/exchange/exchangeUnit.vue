<script setup lang="ts">
import {player} from "../../../../core/player";
import {ref} from "vue";
import {parseResourceName} from "../../../../core/game-mechanics/parse.ts";
import {
  canBuyExchange,
  canSellExchange,
  doBuyExchange,
  doSellExchange
} from "../../../../core/game-mechanics/marketExchange.ts";
import {gameUpdateDisplays} from "../../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../../core/GameDataBase/display.ts";
import {status, statusToBoolean} from "../../../../core/functions/status.ts";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";
import {EventHub, GameEvent} from "../../../../core/gameUpdate/eventHub.ts";

const {index} = defineProps<{ index: number }>()


const ex = {
  company: ref(""),
  resName: ref("energy"),
  bought:ref(0),
  max: ref(0),
  price: ref(0)
}

const canBuy = ref(0 as status)
const canSell = ref(0 as status)

const amount = ref(0)

function update() {
  const exValue = player.market.exchange[index]
  // Max index: length - 1
  // After refreshing exchange it may bugged up
  if (index >= player.market.exchange.length) {
    EventHub.dispatch(GameEvent.MARKET_EXCHANGE_UPDATE)
    return
  }
  ex.company.value = exValue[0]
  ex.resName.value = exValue[1]
  ex.max.value = exValue[2]
  ex.bought.value = exValue[3]
  ex.price.value = exValue[4]
  canBuy.value = canBuyExchange(index, amount.value)
  canSell.value = canSellExchange(index, amount.value)
}

gameUpdateDisplays[displayEnum.marketExchange].push(update)

</script>

<template>
  <div class="gameUnit medium-size flex-col blue-border">
    <div class="flex-row space-around">
      <div>{{ ex.company.value }}</div>
      <div>{{ parseResourceName(ex.resName.value as ResourceTypes) }}</div>
    </div>
    <div class="flex-col border1-top">
      <div class="center-text">剩余数量：{{ ex.max.value - ex.bought.value }}</div>
      <div class="center-text">单价：{{ ex.price }}</div>
    </div>
    <div class="flex-row">
      <input class="blue-border center-text" v-model="amount" placeholder="数量">
      <div class="flex-col center-text" style="flex-grow: 1">
        <div :class="{'btn-disabled':!statusToBoolean(canBuy),'btn':statusToBoolean(canBuy)}"
             @click="doBuyExchange(index,amount, statusToBoolean(canBuy))">购买
        </div>
        <div :class="{'btn-disabled':!canSell,'btn':canSell}" class="border1-top"
             @click="doSellExchange(index,amount, statusToBoolean(canSell))">卖出
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
input {
  background-color: #00000000;
  color: #b8dcee;
  font-size: 1rem;
  max-width: 50%;
}
</style>