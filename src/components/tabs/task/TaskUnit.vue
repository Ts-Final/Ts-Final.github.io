<script setup lang="ts">
import {Task} from "../../../core/GameDataBase/task.ts";
import {player} from "../../../core/player";
import {ref} from "vue";

import {parseResourceName} from "../../../core/game-mechanics/parse.ts";
import {gameUpdateDisplays} from "../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../core/GameDataBase/display.ts";

const {task} = defineProps<{task: Task}>()
const taskP = ref(player.task[task.id-1])
const unlocked = ref(false)
function changeActivate() {
  taskP.value[0] = !taskP.value[0]
}
function update() {
  taskP.value = player.task[task.id-1]
  unlocked.value = player.task[task.id-1][1]
}

gameUpdateDisplays[displayEnum.task].push(update)

</script>

<template>
  <div class="flex-col medium-size gameUnit blue-border" v-if="unlocked">
    <div class="flex-row space-around">
      <span class="name">{{ task.name }}</span>
      <button type="button" @click="changeActivate" class="btn"
              :class="{'btn-ON':taskP[0], 'btn-OFF':!taskP[0]}">
        <span v-if="taskP[0]">ON</span>
        <span v-else>OFF</span>
      </button>
    </div>
    <div class="border1-top">
      {{task.des}}
    </div>
    <div class="gameUnit-popout blue-border">
      <div class="flex-row space-around">
        <div v-if="task.produce.length>0" style="margin-left: 2px">
          <div>资源生产：</div>
          <div v-for="rP in task.produce">{{ parseResourceName(rP[0]) }}：+{{ rP[1] }}/s</div>
        </div>
        <div v-if="task.cost.length>0" style="margin-left: 2px">
          <div>资源消耗：</div>
          <div v-for="rP in task.cost">{{ parseResourceName(rP[0]) }}：-{{ rP[1] }}/s</div>
        </div>
      </div>
      <p class="itl">{{ task.itl }}</p>
    </div>
  </div>

</template>

<style scoped>
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

.name {
  color: #b8dcee;
  font-size: 18px;
}
</style>