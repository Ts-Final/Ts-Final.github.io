<template>
  <div class="task-res-top blue-border">
    <div v-if="task.produce">
      <div class="res pro" v-for="rP in task.produce" :key="rP.value">
        <p>{{rP.res.name}}</p>
        <p>{{rP.value}}/s</p>
      </div>
    </div>
    <SeparateLine :width="1" v-if="task.produce && task.cost" />
    <div v-if="task.cost">
      <div class="res cost" v-for="rC in task.cost" :key="rC.value">
        <p>{{rC.res.name}}</p>
        <p>{{rC.value}}/s</p>
      </div>
    </div>
    <p class="itl">{{task.itl}}</p>
  </div>
</template>

<script lang="ts">
import SeparateLine from "../../small/separateLine.vue"
import {TaskClass} from "../../../core/task/class.ts";

export default {
  name: 'TaskPopoutRow',
  components: {SeparateLine},
  props: {
    task: {type:TaskClass, required:true}
  }
}
</script>
<style scoped>

.task-res-top {
  display: none;
  flex-direction: column;
  width: 75%;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  z-index: 10;
  transition: all 0.3s linear;
}

.res-line-top:hover .task-res-top {
  display: flex;

}

.res {
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: #b8dcee;
}

.pro {
  background-image: linear-gradient(to right, #3fe13f88 0%, #00000000 90%);
}

.cost {
  background-image: linear-gradient(to right, #ff191988 0%, #00000000 90%);
}
.itl {
  font-style: italic;
}

</style>