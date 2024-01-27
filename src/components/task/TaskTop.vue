<script setup lang="ts">
import {player} from "../../core/player.ts";
import TaskEnergy from "./TaskEnergy.vue";
import TaskNormal from "./TaskNormal.vue";

</script>

<template>
  <div class="ui-top" v-if="player.display.task">
    <TaskEnergy v-if="player.display.column==1"/>
    <TaskNormal v-if="player.display.column==2"/>
  </div>

</template>

<style scoped>
.task-top {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>