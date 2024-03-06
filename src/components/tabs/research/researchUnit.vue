<script setup lang="ts">
import {Research} from "../../../core/GameDataBase/research.ts";
import {player} from "../../../core/player";
import {ref} from "vue";
import {calcLevelTime} from "../../../core/game-mechanics/research.ts";
import {parseAffectType, parseAffectValue, parseResourceName} from "../../../core/game-mechanics/parse.ts";
import {gameUpdateDisplays} from "../../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../../core/GameDataBase/display.ts";

const {research} = defineProps<{research: Research}>()
const researchP = ref(player.research[research.id-1])
const finished = ref(false)
let timeToUpg = ref(0)
const percent = ref(0)
const shown = ref(false)

function changeActivate() {
  researchP.value[0] = !researchP.value[0]
}

function update() {
  researchP.value = player.research[research.id-1]
  finished.value = player.research[research.id-1][3] >= research.maxLevel
  timeToUpg.value = calcLevelTime(research)
  percent.value = 100*researchP.value[2] / timeToUpg.value
  shown.value = researchP.value[1] && !finished.value
}

gameUpdateDisplays[displayEnum.research].push(update)

</script>

<template>
  <div class="flex-col medium-size blue-border gameUnit" v-if="shown">
    <div class="show">
      <div class="res-detail-first-row">
        <span class="name">{{research.name}}</span>
        <button type="button" @click="changeActivate" class="btn"
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
      <div class="third-row" style="display: flex;justify-content: space-around">
        <div>Lv. {{ researchP[3] }}</div>
        <div>本级用时：{{timeToUpg}}s</div>
      </div>
      <div class="third-row">
        {{research.des}}
      </div>
    </div>
    <div class="gameUnit-popout blue-border">
      <div v-if="research.cost.length > 0" style="color: #7cdcf4">
        <div>资源消耗：</div>
        <div v-for="rP in research.cost">{{parseResourceName(rP[0])}}：{{rP[1]}}/s</div>
      </div>
      <br v-if="research.cost.length >0 && research.affect.length > 0">
      <div v-if="research.affect.length >0" style="color: #7cdcf4">
        <div>研究效果：</div>
        <div v-for="aff in research.affect">
          {{parseResourceName(aff[0])}} {{parseAffectType(aff[1])}}{{parseAffectValue(aff[2],aff[1])}}
        </div>
      </div>
      <br>
      <p class="itl">{{ research.itl }}</p>
    </div>
  </div>
</template>

<style scoped>
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

.res-detail-first-row {
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
.third-row {
  width: 100%;
  padding: 2px;
  color: #b8dcee;

}
.itl {
  font-style: italic;
  color: #b8dcee;
  margin: 0;
}

</style>