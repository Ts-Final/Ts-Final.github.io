<script setup lang="ts">

import ResearchUnit from "./researchUnit.vue";
import {GameDataBase} from "../../../core/GameDataBase";
</script>

<template>
  <div class="rch-wrapper">
    <ResearchUnit v-for="rch in GameDataBase.Researches" :research="rch"/>
  </div>
</template>

<style scoped>
.rch-wrapper {
  width: 100%;
  padding: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>