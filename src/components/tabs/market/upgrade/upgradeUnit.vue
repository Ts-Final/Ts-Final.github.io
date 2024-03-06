<script setup lang="ts">
import {upg} from "../../../../core/GameDataBase/market/upgrade.ts";
import {player} from "../../../../core/player";
import {ref} from "vue";
import {parseCountryName, parseResourceName} from "../../../../core/game-mechanics/parse.ts";
import {canPurchaseUpgrade, purchaseUpgrade} from "../../../../core/game-mechanics/marketUpgrade.ts";
import {gameUpdateDisplays} from "../../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../../core/GameDataBase/display.ts";

const {upgrade} = defineProps<{ upgrade: upg }>()
const upgP = ref(player.market.upgrades[upgrade.id - 1])
const shown = ref(false)
const canPurchase = ref(false)
const title = ref("")

function update() {
  upgP.value = player.market.upgrades[upgrade.id - 1]
  canPurchase.value = canPurchaseUpgrade(upgrade.id)
  shown.value = upgP.value[0] && !upgP.value[1]
  title.value = canPurchase.value ? "" : "还买不起。"
}

gameUpdateDisplays[displayEnum.marketUpgrade].push(update)
</script>

<template>
  <div class="gameUnit flex-col medium-size blue-border" v-if="shown">
    <div class="flex-row space-around">
      <div>{{ upgrade.name }}</div>
      <div class="op0.5" v-html="parseCountryName(upgrade.country)"></div>
    </div>
    <div class="border1-top">
      {{ upgrade.des }}
    </div>
    <div class="self-center"
         :class="
         {
           'btn': canPurchase,
          'btn-disabled':!canPurchase,
           'text-disabled':!canPurchase
         }"
    @click="purchaseUpgrade(upgrade.id, canPurchase)"
    :title="title">购买
    </div>
    <div class="gameUnit-popout flex-col blue-border">
      <div class="flex-col" v-if="upgrade.costResource.length > 0">
        <div>需求资源：</div>
        <div v-for="cost in upgrade.costResource">
          {{ parseResourceName(cost[0]) }}:{{ cost[1] }}
        </div>
      </div>
      <div class="flex-col center-text" v-if="upgrade.costMoney != 0">
        <div>需求资金：{{ upgrade.costMoney }}</div>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>