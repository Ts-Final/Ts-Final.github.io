<template>
  <div class="first-row">
    <span class="task-name">{{ task.title }}</span>
    <button type="button" @click="task.changeActivate()" class="btn"
            :class="{'btn-ON':task.activated, 'btn-OFF':!task.activated}">
      <span v-if="task.activated">ON</span>
      <span v-else>OFF</span>
    </button>
  </div>
</template>

<script lang="ts">
import {TaskClass} from "../../../../core/task/class.ts";

export default {
  name: 'TaskDisplayRow',
  props: {
    task: {type:TaskClass, required:true}
  }

}
</script>
<style scoped>

.btn {
  transition: all 0.2s linear;
  width: 50px;
  text-align: center;
  background: #00000000;
}

.btn-ON {
  color: #7cdcf4;
  border: #7cdcf4 1px solid;
}

.btn-OFF {
  color: #943430;
  border: #943430 1px solid;
}

.first-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.task-name {
  color: #b8dcee;
  font-size: 18px;
}

</style>