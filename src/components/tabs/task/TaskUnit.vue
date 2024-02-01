<script setup lang="ts">
import SeparateLine from "../../small/separateLine.vue";
import ResourceChange from "../resource/ResourceChange.vue";
</script>

<template>
  <div class="res-line-top blue-border" v-if="task.unlocked.value">
    <div class="first-row">
      <span class="name">{{ task.name }}</span>
      <button type="button" @click="task.changeActivate()" class="btn"
              :class="{'btn-ON':task.activated.value, 'btn-OFF':!task.activated.value}">
        <span v-if="task.activated.value">ON</span>
        <span v-else>OFF</span>
      </button>
    </div>
    <div class="des">
      {{task.des}}
    </div>
    <div class="task-res-top blue-border">
      <div v-if="task.produce">
        <ResourceChange :rc="rP" v-for="rP in task.produce" :key="rP.value"/>
      </div>
      <SeparateLine :width="1" v-if="task.produce && task.cost"/>
      <div v-if="task.cost">
        <ResourceChange :rc="rP" v-for="rP in task.cost" :key="rP.value"/>
      </div>
      <p class="itl">{{ task.itl }}</p>
    </div>
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

.task-res-top {
  flex-direction: column;
  width: 75%;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 2px);
  z-index: 10;
  transition: all 0.1s linear;
  background-image: var(--bgi);
  opacity: 0;
}

.res-line-top:hover .task-res-top {
  opacity: 1;
}

.itl {
  font-style: italic;
  color: #b8dcee;
  margin: 0.5em;
}

p {
  margin: 0;
}

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

.name {
  color: #b8dcee;
  font-size: 18px;
}
.des {
  color: #b8dcee;
  border-top: 1px solid #7cdcf4;
}
</style>

<script lang="ts">

import {TaskClass} from "../../../core/task/class.ts";

export default {
  name: "TaskUnit",
  props: {
    task: {type: TaskClass, required: true}
  }
}
</script>