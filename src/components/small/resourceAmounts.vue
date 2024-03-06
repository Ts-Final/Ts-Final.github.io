<script setup lang="ts">
import {Ref, ref} from "vue";
import {ResourceTypes} from "../../core/GameDataBase/resource.ts";
import {parseResourceName} from "../../core/game-mechanics/parse.ts";
import {player} from "../../core/player";
import {gameUpdateDisplays} from "../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../core/GameDataBase/display.ts";

const resAmount: Ref<{ [key in ResourceTypes]: number }> = ref({
  energy: 0,
  iron: 0,
  coal: 0,
  water: 0,
  copper: 0,
  air: 0,
})
const resChange: Ref<{ [key in ResourceTypes]: number }> = ref({
  energy: 0,
  iron: 0,
  coal: 0,
  water: 0,
  copper: 0,
  air: 0,
})

function update() {
  resAmount.value.energy = player.resource.energy.amount
  resAmount.value.iron = player.resource.iron.amount
  resAmount.value.air = player.resource.air.amount
  resAmount.value.copper = player.resource.copper.amount
  resAmount.value.water = player.resource.water.amount
  resAmount.value.coal = player.resource.coal.amount

  // these are ugly as a fuck, but i dont have a better way to write that
  resChange.value.energy = player.resource.energy.change
  resChange.value.iron = player.resource.iron.change
  resChange.value.air = player.resource.air.change
  resChange.value.copper = player.resource.copper.change
  resChange.value.water = player.resource.water.change
  resChange.value.coal = player.resource.coal.change

}

gameUpdateDisplays[displayEnum.baseLayouts].push(update)
</script>

<template>
  <div class="flex-row flex-nowrap space-around"
       style="color: #b8dcee;margin-bottom: 5px;border-bottom: #7cdcf4 1px solid">
    <div>{{ parseResourceName('energy') }}:{{ resAmount.energy }} ({{ resChange.energy }}/s)</div>
    <div>{{ parseResourceName('iron') }}:{{ resAmount.iron }} ({{resChange.iron }}/s)</div>
    <div>{{ parseResourceName('copper') }}:{{ resAmount.copper }} ({{resChange.copper }}/s)</div>
    <div>{{ parseResourceName('coal') }}:{{ resAmount.coal }} ({{resChange.coal }}/s)</div>
    <div>{{ parseResourceName('water') }}:{{ resAmount.water }} ({{resChange.water }}/s)</div>
    <div>{{ parseResourceName('air') }}:{{ resAmount.air }} ({{resChange.air }}/s)</div>
  </div>
</template>

<style scoped>

</style>