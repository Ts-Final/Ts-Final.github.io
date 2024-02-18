<script setup lang="ts">

import {ref} from "vue";
import {player} from "../../../../core/player";
import UpgradeUnit from "./upgradeUnit.vue";
import {GameDataBase} from "../../../../core/GameDataBase";
import {gameUpdateDisplays} from "../../../../core/gameUpdate";

const money = ref(0)
function update() {
  money.value = player.money
}
gameUpdateDisplays.push(update)
</script>

<template>
  <div class="full flex-col">
    <div class="full-w center-text" style="margin: 5px;color: #7cdcf4">你拥有{{money}}的资金。</div>
    <div class="full-w flex-row flex-wrap">
      <UpgradeUnit :upgrade="upgrade" v-for="upgrade in GameDataBase.Market.Upgrade"/>
    </div>
  </div>

</template>

<style scoped>

</style>