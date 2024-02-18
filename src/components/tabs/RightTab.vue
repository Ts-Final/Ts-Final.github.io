<script setup lang="ts">
import TaskTop from "./task/TaskTop.vue";
import {displayRef} from "../../core/game-mechanics/display.ts";
import ResearchTop from "./research/researchTop.vue";
import H2PTab from "./H2PTab.vue";
import ResourceDetail from "./resource/detail/ResourceDetail.vue";
import ResourceGeneralTop from "./resource/general/ResourceGeneralTop.vue";
import UpgradeTab from "./market/upgrade/upgradeTab.vue";
import BasePriceTab from "./market/basePrice/basePriceTab.vue";
import ExchangeTab from "./market/exchange/exchangeTab.vue";
import CompanyTab from "./market/company/companyTab.vue";
</script>

<template>
  <KeepAlive>
    <div class="full">
      <ResourceGeneralTop v-if="displayRef.resourceGeneral.value"/>
      <ResourceDetail v-else-if="displayRef.resourceDetail.value"/>

      <TaskTop v-else-if="displayRef.task.value"/>

      <ResearchTop v-else-if="displayRef.research.value"/>

      <UpgradeTab v-else-if="displayRef.marketUpgrade.value"/>
      <BasePriceTab v-else-if="displayRef.marketPrice.value"/>
      <ExchangeTab v-else-if="displayRef.marketExchange.value"/>
      <CompanyTab v-else-if="displayRef.marketCompany.value"/>

      <H2PTab v-else-if="displayRef.h2p.value"/>
    </div>
  </KeepAlive>

</template>

<style scoped>

</style>