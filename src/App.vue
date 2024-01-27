<script setup lang="ts">

import "./base.css"
import ResourceTop from "./components/res/ResourceTop.vue";
import TaskTop from "./components/task/TaskTop.vue";
import TopBarTop from "./components/topbar/TopBarTop.vue";
</script>

<template class="full">
  <TopBarTop/>
  <ResourceTop />
  <TaskTop/>
</template>

<style>
body,#app, :root {
  background-image:linear-gradient(60deg, #0d1418 0%, #11161b 100%);
  width: 100%;
  height: 100%;
}
</style>