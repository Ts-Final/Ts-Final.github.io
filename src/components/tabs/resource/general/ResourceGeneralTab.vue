<script setup lang="ts">
import RGTLine from "./RGTLine.vue";
import {player} from "../../../../core/player";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";
</script>

<template>
  <div class="res-general-wrapper">
    <div class="RGT border-list">
      <div class="RGT-line blue-border">
        <p>资源类型</p>
        <p>当前数量</p>
        <p>上限</p>
        <p>变化/s</p>
        <p>最大</p>
      </div>
      <RGTLine class="RGT-line blue-border no-top-border"
               v-for="res in Object.keys(player.resource)"
               :ResKey="res as ResourceTypes" :key="res"/>
    </div>
  </div>

</template>

<style scoped>
.RGT {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 75%;
  margin: auto;
  color: #7cdcf4;
  top: -15%;
}

.RGT-line {
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  text-align: center;
}

.res-general-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">

export default {
  name: "ResourceGeneralTop",
}
</script>