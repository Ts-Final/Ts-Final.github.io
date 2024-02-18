<script setup lang="ts">

import ResearchUnit from "./researchUnit.vue";
import {GameDataBase} from "../../../core/GameDataBase";
import ResourceAmounts from "../../small/resourceAmounts.vue";
</script>

<template>
  <ResourceAmounts class="full-w"/>
  <div class="full-w flex-wrap flex-row">
    <ResearchUnit v-for="rch in GameDataBase.Researches" :research="rch"/>
  </div>
</template>

<style scoped>
</style>