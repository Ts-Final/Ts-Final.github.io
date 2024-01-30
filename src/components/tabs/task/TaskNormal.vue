<script setup lang="ts">

import {normalTasks} from "../../../core/task/Tasks.ts";
import TaskUnit from "./unit/TaskUnit.vue";
</script>

<template>
  <div>
    <TaskUnit :task="task" v-for="task in normalTasks()" :key="task.id"/>
  </div>
</template>

<style scoped>

</style>