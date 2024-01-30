<script setup lang="ts">

import {player} from "../core/player.ts";
import {changeDisplay} from "../core/display.ts";
</script>

<template>
  <div class="lb-top">
    <div class="lb-li circle" style="color: #7cdcf4"
         :class="{chosen:player.display.resource}" @click="changeDisplay('resource')">
      <p class="pic">资</p>
      <p class="lb-name">资源</p>
    </div>
    <div class="lb-li circle" style="color: #7cdcf4"
         :class="{chosen:player.display.task}" @click="changeDisplay('task')">
      <p class="pic">产</p>
      <p class="lb-name">生产</p>
    </div>
  </div>

</template>

<style scoped>
.lb-top {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 8rem;
  height: 100%;
  padding-top: 5px;

}
.lb-li {
  margin: 0 1rem 1rem 1rem;
  border: #7cdcf4 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:6rem;
  height:6rem;
  text-align: center;
  cursor: pointer;
}
.lb-name {
  height: 0;
  color:#00000000;
  transition: all 0.15s linear;
  margin: 0;
}
.lb-li:hover .lb-name {
  height: 1rem;
  color: #7cdcf4;
}
.pic {
  font-size: 2rem;
  height: 4rem;
  margin: 0;
}
.chosen {
  border-width: 5px;
}
</style>