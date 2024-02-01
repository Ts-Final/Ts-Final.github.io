<script setup lang="ts">

import {player} from "../core/player.ts";
import {changeDisplay} from "../core/display.ts";
import {computed} from "vue";

const researchShown = computed(()=> {
  return player.display.research.value || player.display.researchInf.value
})
</script>

<template>
  <div class="lb-ul-1">
    <div class="lb-li-1" :class="{chosen:player.display.resource.value}">
      <div class="lb-name" @click="changeDisplay('resource')">资源</div>
    </div>
    <div class="lb-li-1" :class="{chosen:player.display.task.value}">
      <div class="lb-name" @click="changeDisplay('task')">生产</div>
    </div>
    <div class="lb-li-1" :class="{chosen:researchShown}">
      <div class="lb-name">研究</div>
      <div class="lb-ul-2">
        <div class="lb-li-2 lb-name" @click="changeDisplay('research')"
             :class="{chosen:player.display.research.value}">一次性</div>
        <div class="lb-li-2 lb-name" @click="changeDisplay('researchInf')"
             :class="{chosen:player.display.researchInf.value}">infinity</div>

      </div>
    </div>
  </div>

</template>

<style scoped>
.lb-name {
  display: flex;
  height: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.lb-ul-1 {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: var(--left-bar-width);
  height: 100%;
  color: #7cdcf4;

}
.lb-li-1 {
  border: #7cdcf4 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:auto;
  text-align: center;
  cursor: pointer;
}
.lb-li-1:hover .lb-ul-2{
  display: flex;
}
.lb-ul-2 {
  margin-left: 2px;
  width: 100%;
  display: none;
  flex-direction: column;
  text-align: center;
}
.lb-li-2 {
  border: 1px solid #7cdcf4;
  cursor: pointer;

}
.chosen {
  border-left-width: 5px;
}
.lb-li-1 .lb-li-2 :not(:first-child) {
  border-top: none;
}
</style>