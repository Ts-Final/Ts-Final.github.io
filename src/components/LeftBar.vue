<script setup lang="ts">
import {computed} from "vue"
import {changeDisplay, displayRef} from "../core/game-mechanics/display.ts";

const storyShown = computed(() =>
    displayRef.storyExtra.value ||
    displayRef.storyMain.value ||
    displayRef.storySide.value
)
const resourceShown = computed(() =>
    displayRef.resourceGeneral.value ||
    displayRef.resourceDetail.value
)
const marketShown = computed(() =>
    displayRef.marketUpgrade.value ||
    displayRef.marketPrice.value ||
    displayRef.marketExchange.value ||
    displayRef.marketCompany.value
)
</script>

<template>
  <div class="lb-ul-1">
    <div class="lb-li-1" :class="{chosen:resourceShown}">
      <div class="lb-name" @click="changeDisplay('resourceGeneral')">资源</div>
      <div class="lb-ul-2">
        <div class="lb-li-2 lb-name" :class="{chosen: displayRef.resourceGeneral.value}"
             @click="changeDisplay('resourceGeneral')">总览
        </div>
        <div class="lb-li-2 lb-name" :class="{chosen:displayRef.resourceDetail.value}"
             @click="changeDisplay('resourceDetail')">详细
        </div>
      </div>
    </div>
    <div class="lb-li-1" :class="{chosen:displayRef.task.value}">
      <div class="lb-name" @click="changeDisplay('task')">生产</div>
    </div>
    <div class="lb-li-1" :class="{chosen:displayRef.research.value}">
      <div class="lb-name" @click="changeDisplay('research')">研究</div>
    </div>
    <div class="lb-li-1" :class="{chosen:storyShown}" v-if="false">
      <div class="lb-name">故事</div>
      <div class="lb-ul-2">
        <div class="lb-li-2 lb-name" @click="changeDisplay('storyMain')"
             :class="{chosen:displayRef.storyMain.value}">主线
        </div>
        <div class="lb-li-2 lb-name" @click="changeDisplay('storySide')"
             :class="{chosen:displayRef.storySide.value}">支线
        </div>
        <div class="lb-li-2 lb-name" @click="changeDisplay('storyExtra')"
             :class="{chosen:displayRef.storyExtra.value}">额外
        </div>
      </div>
    </div>
    <div class="lb-li-1" :class="{chosen:marketShown}">
      <div class="lb-name">市场</div>
      <div class="lb-ul-2">
        <div class="lb-li-2 lb-name" :class="{chosen:displayRef.marketUpgrade.value}"
             @click="changeDisplay('marketUpgrade')">购买</div>
        <div class="lb-li-2 lb-name" :class="{chosen:displayRef.marketPrice.value}"
             @click="changeDisplay('marketPrice')">价格</div>
        <div class="lb-li-2 lb-name" :class="{chosen:displayRef.marketExchange.value}"
             @click="changeDisplay('marketExchange')">交易</div>
        <div class="lb-li-2 lb-name" :class="{chosen:displayRef.marketCompany.value}"
             @click="changeDisplay('marketCompany')">合作公司</div>
      </div>
    </div>
    <div class="lb-li-2" :class="{chosen:displayRef.h2p.value}" style="border-color: #c35ee7">
      <div class="lb-name" @click="changeDisplay('h2p')">指引</div>
    </div>
  </div>

</template>

<style scoped>
.lb-name {
  display: flex;
  height: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.lb-ul-1 {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: var(--left-bar-width);
  height: 100%;
  color: #7cdcf4;

}

.lb-li-1 {
  border: #7cdcf4 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  text-align: center;
  cursor: pointer;
}

.lb-li-1:hover .lb-ul-2 {
  display: flex;
}

.lb-ul-2 {
  margin-left: 0;
  width: 100%;
  display: none;
  flex-direction: column;
  text-align: center;
}

.lb-li-2 {
  border: 1px solid #7cdcf4;
  cursor: pointer;

}

.chosen {
  border-left-width: 5px;
}

.lb-li-1 .lb-li-2 :not(:first-child) {
  border-top: none;
}
</style>