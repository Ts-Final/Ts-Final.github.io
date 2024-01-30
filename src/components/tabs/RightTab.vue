<script setup lang="ts">

import ResourceTop from "./res/ResourceTop.vue";
import TaskTop from "./task/TaskTop.vue";
import {player} from "../../core/player.ts";
</script>

<template>
  <div class="full">
    <ResourceTop v-if="player.display.resource"/>
    <TaskTop v-else-if="player.display.task"/>
  </div>

</template>

<style scoped>

</style>