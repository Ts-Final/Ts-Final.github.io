<script setup lang="ts">

import ResourceTop from "./resource/ResourceTop.vue";
import TaskTop from "./task/TaskTop.vue";
import {player} from "../../core/player.ts";
import ResearchTop from "./research/researchTop.vue";
</script>

<template>
  <div class="full">
    <div class="top114514"/>
    <ResourceTop v-if="player.display.resource.value"/>
    <TaskTop v-else-if="player.display.task.value"/>
    <ResearchTop v-else-if="player.display.research.value"/>
  </div>

</template>

<style scoped>
.top114514 {
  height: 2rem;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
</style>