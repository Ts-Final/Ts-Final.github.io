<script setup lang="ts">
import ResourceChange from "../resource/ResourceChange.vue";
import {Research} from "../../../core/GameDataBase/research.ts";
import {player} from "../../../core/player.ts";
import {ref} from "vue";
import {gameUpdateDisplays} from "../../../core/gameUpdate.ts";
import {calcLevelTime} from "../../../core/research.ts";

const {research} = defineProps<{research: Research}>()
const researchP = ref(player.research[research.id])
const finished = ref(false)
let timeToUpg = 0
const percent = ref(0)

function changeActivate() {
  researchP.value[0] = !researchP.value[0]
}

function update() {
  researchP.value = player.research[research.id]
  finished.value = player.research[research.id][3] >= research.maxLevel
  timeToUpg = calcLevelTime(research)
  percent.value = 100*researchP.value[2] / timeToUpg
}

gameUpdateDisplays.research.push(update)

</script>

<template>
  <div class="rch-top blue-border" v-if="researchP[1] && !finished">
    <div class="show">
      <div class="first-row">
        <span class="name">{{research.name}} Lv.{{researchP[3]}}</span>
        <button type="button" @click="changeActivate()" class="btn"
                :class="{'btn-ON':researchP[0], 'btn-OFF':!researchP[0]}">
          <span v-if="researchP[0]">ON</span>
          <span v-else>OFF</span>
        </button>
      </div>
      <div class="second-row">
        <div class="progress-wrapper">
          <div class="progress" :style="{width: percent+'%'}"/>
        </div>
      </div>
      <div class="third-row">
        {{research.des}}
      </div>
    </div>
    <div class="popout blue-border">
      <ResourceChange :rc="rP" v-for="rP in research.cost" :key="rP[1]" :produce="false"/>
      <p class="itl">{{ research.itl }}</p>
    </div>
  </div>
</template>

<style scoped>
.rch-top {
  width: 15%;
  display: flex;
  position: relative;
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

.first-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.name {
  color: #b8dcee;
  font-size: 18px;
}
.second-row {
  display: flex;
  flex-direction: row;

}
.progress-wrapper {
  margin: 2px;
  border: 2px solid #7cdcf4;
  padding: 2px;
  height: 0.75rem;
  width: 100%;
}
.progress {
  height: 100%;
  background: #7cdcf4;
}
.popout {
  flex-direction: column;
  width: 75%;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  z-index: 10;
  transition: all 0.1s linear;
  background-image: var(--bgi);
  opacity: 0;
}
.rch-top:hover .popout {
  opacity: 1;
}
.third-row {
  width: 100%;
  padding: 2px;
  color: #b8dcee;

}
.itl {
  font-style: italic;
  color: #b8dcee;
}
</style>