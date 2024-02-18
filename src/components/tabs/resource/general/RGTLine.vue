<script setup lang="ts">
import {ref} from "vue";
import {gameUpdateDisplays} from "../../../../core/gameUpdate";
import {resource} from "../../../../core/player/resource.ts";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";
import {parseResourceName} from "../../../../core/game-mechanics/parse.ts";

const {ResKey} = defineProps<{ResKey:ResourceTypes}>()

const displayName = parseResourceName(ResKey)

const amount = ref(0)
const maximum = ref(1e4)
const produce = ref(0)
const cost = ref(0)
function update() {
  amount.value = resource[ResKey].amount
  maximum.value = resource[ResKey].maximum
  produce.value = resource[ResKey].produceChange.calcAllChange
  cost.value = resource[ResKey].costChange.calcAllChange
}
gameUpdateDisplays.push(update)

</script>

<template>
  <div>
    <p>{{displayName}}</p>
    <p>{{amount}}</p>
    <p>{{maximum}}</p>
    <p>{{produce}}</p>
    <p>{{cost}}</p>
  </div>

</template>