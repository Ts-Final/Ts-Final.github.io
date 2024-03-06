<script setup lang="ts">
import TaskTop from "./task/TaskTop.vue";
import ResearchTop from "./research/researchTop.vue";
import H2PTab from "./H2PTab.vue";
import ResourceDetailTab from "./resource/detail/ResourceDetailTab.vue";
import ResourceGeneralTab from "./resource/general/ResourceGeneralTab.vue";
import UpgradeTab from "./market/upgrade/upgradeTab.vue";
import BasePriceTab from "./market/basePrice/basePriceTab.vue";
import ExchangeTab from "./market/exchange/exchangeTab.vue";
import CompanyTab from "./market/company/companyTab.vue";
import {ref} from "vue";
import {player} from "../../core/player";
import {gameUpdateDisplays} from "../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../core/GameDataBase/display.ts";

const displayRef = ref(0)
function update() {
  displayRef.value = player.display
}

gameUpdateDisplays[displayEnum.baseLayouts].push(update)
</script>

<template>
  <div class="right-tab" style="left: var(--left-bar-width);position:relative;">
    <ResourceGeneralTab v-if="displayRef == displayEnum.resourceGeneral"/>
    <ResourceDetailTab v-else-if="displayRef == displayEnum.resourceDetail"/>

    <TaskTop v-else-if="displayRef == displayEnum.task"/>

    <ResearchTop v-else-if="displayRef == displayEnum.research"/>

    <UpgradeTab v-else-if="displayRef == displayEnum.marketUpgrade"/>
    <BasePriceTab v-else-if="displayRef == displayEnum.marketPrice"/>
    <ExchangeTab v-else-if="displayRef == displayEnum.marketExchange"/>
    <CompanyTab v-else-if="displayRef == displayEnum.marketCompany"/>

    <H2PTab v-else-if="displayRef == displayEnum.h2p"/>
  </div>

</template>

<style scoped>
.right-tab {
  left: var(--left-bar-width);
  position: relative;
  width: calc(100% - var(--left-bar-width));
  border-left: none;
}
</style>