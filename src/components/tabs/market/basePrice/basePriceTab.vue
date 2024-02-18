<script setup lang="ts">
import {player} from "../../../../core/player";
import BasePriceLine from "./basePriceLine.vue";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";
</script>

<template>
  <div class="full flex-row" style="justify-content: center;">
    <div class="flex-col table blue-border">
      <div class="flex-row bpt-line">
        <p>资源类型</p>
        <p>基础价格/1</p>
      </div>
      <BasePriceLine :resKey="resKey as ResourceTypes" v-for="resKey in Object.keys(player.resource)" />
    </div>
  </div>
</template>

<style scoped>
.table {
  width: 75% !important;
  align-self: center;
  position: relative;;
  top: -10%;
}

.bpt-line {
  display: inline-grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-flow: row;
  text-align: center;
  color: #b8dcee;
}
</style>