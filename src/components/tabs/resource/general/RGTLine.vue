<script setup lang="ts">
import {ref} from "vue";
import {player} from "../../../../core/player";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";
import {parseResourceName} from "../../../../core/game-mechanics/parse.ts";
import {gameUpdateDisplays} from "../../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../../core/GameDataBase/display.ts";

const {ResKey} = defineProps<{ResKey:ResourceTypes}>()

const displayName = parseResourceName(ResKey)

const amount = ref(0)
const maximum = ref(1e4)
const change = ref(0)
const max_record = ref(0)

function update() {
  amount.value = player.resource[ResKey].amount
  maximum.value = player.resource[ResKey].maximum
  change.value = player.resource[ResKey].change
  max_record.value = player.resource[ResKey].max_record
}

gameUpdateDisplays[displayEnum.resourceGeneral].push(update)

</script>

<template>
  <div>
    <p>{{displayName}}</p>
    <p>{{amount}}</p>
    <p>{{maximum}}</p>
    <p>{{change}}/s</p>
    <p>{{max_record}}</p>
  </div>

</template>