<script setup lang="ts">
import TaskDisplayRow from "./TaskDisplayRow.vue";
import TaskPopoutRow from "./TaskPopoutRow.vue";
</script>

<template>
  <div class="res-line-top blue-border" v-if="task.unlocked">
    <TaskDisplayRow :task="task"/>
    <TaskPopoutRow :task="task"/>
  </div>

</template>

<style scoped>
.res-line-top {
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 200px;
  max-width: 250px;
  margin: 0 5px 0 5px;
  padding: 2px;

}

</style>

<script lang="ts">

import {TaskClass} from "../../../../core/task/class.ts";

export default {
  name: "TaskUnit",
  props: {
    task: {type:TaskClass, required:true}
  }
}
</script>