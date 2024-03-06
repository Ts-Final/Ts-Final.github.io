<script setup lang="ts">
import {LB_TAB} from "../../core/GameDataBase/tabs.ts";
import {player} from "../../core/player";
import {ref} from "vue";
import {gameUpdateDisplays} from "../../core/gameUpdate/updateDisplay.ts";
import {displayEnum} from "../../core/GameDataBase/display.ts";
import {changeTab} from "../../core/game-mechanics/display.ts";
import {EventHub, GameEvent} from "../../core/gameUpdate/eventHub.ts";

const {Tab} = defineProps<{ Tab: LB_TAB }>()

const hasSubTab = Tab.subTabs != undefined
const unlocked = ref(false)
const onUpdate = ref(true)

function update() {
  unlocked.value = Tab.unlocked || unlocked.value || player.dev
}

gameUpdateDisplays[displayEnum.baseLayouts].push(update)

EventHub.addHandler(GameEvent.UPDATE_TAB, function () {
  onUpdate.value = false
  onUpdate.value = true
})

</script>

<template>
  <div class="sidebar-tab" v-if="unlocked && onUpdate"
       :class="{'sidebar-no-subtab': !hasSubTab}">
    <div class="sidebar-tab-name" style="border: none"
         @click="changeTab(Tab.frame[0])">
      <span style="align-self: center;border:none">{{ Tab.name }}</span>
    </div>
    <div class="sidebar-tab-sublist" v-if="hasSubTab">
      <div v-for="subTab in Tab.subTabs"
           @click="changeTab(subTab.frame)"
           class="sidebar-subtab"
      >
        {{ subTab.name }}
      </div>
    </div>
  </div>

</template>

<style scoped>
.sidebar-tab {
  border-top: 1px solid;
  border-right: 1px solid;
  width: 100%;
  color: #7cdcf4;
  border-color: #7cdcf4;
  height: var(--sidebar-tab-height);
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: var(--bgi);
  position: relative;
  cursor: pointer;
}

.sidebar-tab-sublist {
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 100%;
  width: var(--left-bar-width);
  opacity: 0;
  transition: all 0.2s linear;
  background-image: inherit;
  pointer-events: none;
}

.sidebar-tab-name {
  width: 100%;
  height: 100%;
  border: none;
  justify-content: center;
  display: flex;
}

.sidebar-tab:hover .sidebar-tab-sublist {
  display: flex;
  opacity: 1;
  left: calc(var(--left-bar-width) + var(--sidebar-tab-tri));
  pointer-events: all;
}

.sidebar-subtab {
  border: 1px solid;
  height: var(--sidebar-tab-height);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sidebar-tab::after {
  content: "";
  border-color: #7cdcf4;
  left: 100%;
  position: absolute;
  top: 0.5rem;
  width: 0;
  height: 0;
  transition: all 0.2s linear;

  border-bottom: 1rem transparent solid;
  border-top: 1rem transparent solid;
  border-left: 0 #7cdcf4 solid;
}

.sidebar-tab:hover::after {
  border-left-width: var(--sidebar-tab-tri)
}

.sidebar-no-subtab::after {
  display: none;
}
</style>