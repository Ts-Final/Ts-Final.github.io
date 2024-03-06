<script setup lang="ts">
import {Ref, ref} from "vue";
import {player} from "../../../../core/player";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";
import {parseAffectValue, parseResourceName} from "../../../../core/game-mechanics/parse.ts";
import {gameUpdateDisplays} from "../../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../../core/GameDataBase/display.ts";

/**
 * volar-complainer
 */
const chosenResource: Ref<ResourceTypes> = ref("energy")

type affect = [string, number][]
type chosenAffectType = {
  pro: affect,
  consume: affect,
  maxAdd: affect,
  maxMult: affect
}
const chosenAffect: Ref<chosenAffectType> = ref({pro: [], consume: [], maxAdd: [], maxMult: [],})

function changeChosen(key: string) {
  chosenResource.value = key as ResourceTypes
}

function update() {
  const affects = player.resource[chosenResource.value as keyof typeof player.resource].affects
  chosenAffect.value.pro = affects.pro
  chosenAffect.value.consume = affects.consume
  chosenAffect.value.maxMult = affects.maxMult
  chosenAffect.value.maxAdd = affects.maxAdd
}

gameUpdateDisplays[displayEnum.resourceDetail].push(update)


</script>

<template>
  <div class="res-detail-wrapper">
    <div class="res-detail-top">
      <div class="res-detail-btn" v-for="resKey in Object.keys(player.resource)"
           :key="resKey" @click="changeChosen(resKey)"
           :class="{chosen:chosenResource===resKey}">
        {{ parseResourceName(resKey as ResourceTypes) }}
      </div>
    </div>
    <div class="res-detail">
      <div class="res-detail-list  left-border right-border">
        <div class="res-detail-first-row">生产加成</div>
        <div v-for="aff in chosenAffect.pro" class="res-detail-row">
          <div>{{ aff[0] }}</div>
          <div>+{{ parseAffectValue(aff[1], 'pro') }}</div>
        </div>
      </div>
      <div class="res-detail-list right-border">
        <div class="res-detail-first-row">消耗减少</div>
        <div v-for="aff in chosenAffect.consume" class="res-detail-row">
          <div>{{ aff[0] }}</div>
          <div>-{{ parseAffectValue(aff[1], 'consume') }}</div>
        </div>
      </div>
      <div class="res-detail-list right-border">
        <div class="res-detail-first-row">最大（加算）</div>
        <div v-for="aff in chosenAffect.maxAdd" class="res-detail-row">
          <div>{{ aff[0] }}</div>
          <div>+{{ parseAffectValue(aff[1], 'maxAdd') }}</div>
        </div>
      </div>
      <div class="res-detail-list right-border">
        <div class="res-detail-first-row">最大（乘算）</div>
        <div v-for="aff in chosenAffect.maxMult" class="res-detail-row">
          <div>{{ aff[0] }}</div>
          <div>+{{ parseAffectValue(aff[1], 'maxMult') }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.res-detail-wrapper {
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.res-detail-top {
  top: 0;
  width: 90%;
  left: 0;
  display: flex;
  margin: 5%;
}

.res-detail-btn {
  border: 2px #7cdcf4 solid;
  text-align: center;
  color: #7cdcf4;
  flex-grow: 1;
}

.chosen {
  border-color: #c35ee7;
}

.res-detail {
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #7cdcf4;
  height: 90%;

}

.left-border {
  border-left: 1px solid #7cdcf4;
}

.right-border {
  border-right: 1px solid #7cdcf4;
}

.res-detail-first-row {
  border: #7cdcf4 2px solid;
  text-align: center;
  width: 100%;
}

.res-detail-list {
  flex-direction: column;
  flex-grow: 1;
}

.res-detail-row {
  display: flex;
  flex-direction: row;
}

.res-detail-row > div {
  width: 50%;
  padding: 2px;
}

.res-detail-row > div:first-child {
  text-align: left;
}

.res-detail-row > div:not(:first-child) {
  text-align: right;
}
</style>