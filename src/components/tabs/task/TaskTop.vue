<script setup lang="ts">
import TaskUnit from "./TaskUnit.vue";
import {GameDataBase} from "../../../core/GameDataBase";

</script>

<template>
  <div class="task-wrapper">
    <TaskUnit :task="task" v-for="task in GameDataBase.Tasks" :key="task.id"/>
  </div>
</template>

<style scoped>
.task-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

</style>