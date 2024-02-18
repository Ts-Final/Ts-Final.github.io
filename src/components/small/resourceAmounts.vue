<script setup lang="ts">
import {Ref, ref} from "vue";
import {ResourceTypes} from "../../core/GameDataBase/resource.ts";
import {parseResourceName} from "../../core/game-mechanics/parse.ts";

const resAmount :Ref<{[key in ResourceTypes]: number}>= ref({
  energy: 0,
  iron: 0,
  coal: 0,
  water: 0,
  copper: 0,
  air: 0,
})
</script>

<template>
  <div class="flex-row flex-nowrap space-around"
       style="color: #b8dcee;margin-bottom: 5px;border-bottom: #7cdcf4 1px solid">
    <div>{{parseResourceName('energy')}}:{{resAmount.energy}}</div>
    <div>{{parseResourceName('iron')}}:{{resAmount.iron}}</div>
    <div>{{parseResourceName('copper')}}:{{resAmount.copper}}</div>
    <div>{{parseResourceName('coal')}}:{{resAmount.coal}}</div>
    <div>{{parseResourceName('water')}}:{{resAmount.water}}</div>
    <div>{{parseResourceName('air')}}:{{resAmount.air}}</div>
  </div>
</template>

<style scoped>

</style>