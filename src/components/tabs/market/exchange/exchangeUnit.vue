<script setup lang="ts">
import {player} from "../../../../core/player";
import {ref} from "vue";
import {gameUpdateDisplays} from "../../../../core/gameUpdate";
import {parseResourceName} from "../../../../core/game-mechanics/parse.ts";
import {
  canBuyExchange,
  canSellExchange,
  doBuyExchange,
  doSellExchange
} from "../../../../core/game-mechanics/marketExchange.ts";

const {index} = defineProps<{ index: number }>()
/**
 * @borrows {player.market.exchange}
 */
const exP = ref(player.market.exchange[index])

const canBuy = ref(false)
const canSell = ref(false)

const amount = ref(0)

function update() {
  exP.value = player.market.exchange[index]
  canBuy.value = canBuyExchange(index,amount.value)
  canSell.value = canSellExchange(index,amount.value)
}

gameUpdateDisplays.push(update)
</script>

<template>
  <div class="gameUnit medium-size flex-col blue-border">
    <div class="flex-row space-around">
      <div>{{ exP[0] }}</div>
      <div>{{ parseResourceName(exP[1]) }}</div>
    </div>
    <div class="flex-row border1-top">
      <div class="center-text">剩余数量：{{ exP[2] - exP[3] }}</div>
    </div>
    <div class="flex-row">
      <input class="blue-border center-text" v-model="amount" placeholder="数量">
      <div class="flex-col center-text" style="flex-grow: 1">
        <div :class="{'btn-disabled':!canBuy,'btn':canBuy}"
             @click="doBuyExchange(index,amount, canBuy)">购买
        </div>
        <div :class="{'btn-disabled':!canSell,'btn':canSell}" class="border1-top"
             @click="doSellExchange(index,amount, canSell)">卖出
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