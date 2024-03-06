<script setup lang="ts">

import ResourceAmounts from "../../../small/resourceAmounts.vue";
import {ref} from "vue";
import {player} from "../../../../core/player";
import ExchangeUnit from "./exchangeUnit.vue";
import {gameUpdateDisplays} from "../../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../../core/GameDataBase/display.ts";
import {EventHub, GameEvent} from "../../../../core/gameUpdate/eventHub.ts";

const money = ref(0)

function toArray(arr: any[]): number[] {
  let a = []
  for (let i = 0; i < arr.length; i++) {
    a.push(i)
  }
  return a
}

function update() {
  money.value = player.money
}

gameUpdateDisplays[displayEnum.marketExchange].push(update)

const onUpdate = ref(true)
function refresh () {
  onUpdate.value = false
  onUpdate.value = true
}
EventHub.addHandler(GameEvent.MARKET_UPDATE, refresh)

</script>

<template>
  <div class="flex-col full">
    <ResourceAmounts class="full-w flex-row"/>
    <div class="full-w center-text" style="margin: 5px;color: #7cdcf4">你拥有{{ money }}的资金。</div>
    <div class="full-w flex-row flex-wrap" v-if="onUpdate">
      <ExchangeUnit :index="idx" v-for="idx in toArray(player.market.exchange)"/>
    </div>
  </div>

</template>

<style scoped>

</style>