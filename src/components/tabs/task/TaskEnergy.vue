<script setup lang="ts">

import {energyTasks} from "../../../core/task/Tasks.ts";
import TaskUnit from "./TaskUnit.vue";
</script>

<template>
  <div>
    <TaskUnit :task="task" v-for="task in energyTasks()" :key="task.id" />
  </div>
</template>

<style scoped>

</style>