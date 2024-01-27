<script setup lang="ts">

import ResourceGeneralTop from "./general/ResourceGeneralTop.vue";
import {player} from "../../core/player.ts";
</script>

<template>
  <div v-if="player.display.resource" class="ui-top">
    <ResourceGeneralTop v-if="player.display.column==1"/>
  </div>
</template>

<style scoped>

</style>
