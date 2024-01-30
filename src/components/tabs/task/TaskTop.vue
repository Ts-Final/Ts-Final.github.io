<script setup lang="ts">
import TaskUnit from "./unit/TaskUnit.vue";
import {player} from "../../../core/player.ts";

</script>

<template>
  <div class="task-wrapper">
    <TaskUnit :task="task" v-for="task in player.tasks"/>
  </div>
</template>

<style scoped>
.task-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>