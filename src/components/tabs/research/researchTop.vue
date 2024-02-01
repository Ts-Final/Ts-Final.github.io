<script setup lang="ts">

import ResearchUnit from "./researchUnit.vue";
import {Research} from "../../../core/research/Research.ts";
</script>

<template>
  <div class="rch-wrapper">
    <ResearchUnit v-for="rch in Research" :research="rch"/>
  </div>
</template>

<style scoped>
.rch-wrapper {
  width: 100%;
  padding: 2px;
}
</style>