<script setup lang="ts">
import TaskTop from "./task/TaskTop.vue";
import {displayRef} from "../../core/display.ts";
import ResourceTop from "./resource/ResourceTop.vue";
import ResearchTop from "./research/researchTop.vue";
import H2PTab from "./H2PTab.vue";

</script>

<template>
  <KeepAlive>
    <div class="full">
      <ResourceTop v-if="displayRef.resource.value"/>
      <TaskTop v-else-if="displayRef.task.value"/>
      <ResearchTop v-else-if="displayRef.research.value"/>
      <H2PTab v-else-if="displayRef.h2p.value"/>
    </div>
  </KeepAlive>

</template>

<style scoped>

</style>