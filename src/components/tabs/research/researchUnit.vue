<script setup lang="ts">
import ResourceChange from "../resource/ResourceChange.vue";
</script>

<template>
  <div class="rch-top blue-border" v-if="research?.unlocked && !research?.finished.value">
    <div class="show">
      <div class="first-row">
        <span class="name">{{research.name}}</span>
        <button type="button" @click="research.changeActivate()" class="btn"
                :class="{'btn-ON':research.activated.value, 'btn-OFF':!research.activated.value}">
          <span v-if="research.activated.value">ON</span>
          <span v-else>OFF</span>
        </button>
      </div>
      <div class="second-row">
        <div class="progress-wrapper">
          <div class="progress" :style="{width: (research.started.value*100/research.time)+'%'}"/>
        </div>
      </div>
      <div class="third-row">
        {{research.des}}
      </div>
    </div>
    <div class="popout blue-border">
      <ResourceChange :rc="rP" v-for="rP in research.costResource" :key="rP.value"/>
      <p class="itl">{{ research.itl }}</p>
    </div>
  </div>
</template>

<style scoped>
.rch-top {
  width: 20%;
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
  transition: all 1s linear;
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

<script lang="ts">
import {ResearchClass} from "../../../core/research/class.ts";

export default {
  name:"researchUnit",
  props: {
    research: ResearchClass
  }
}
</script>