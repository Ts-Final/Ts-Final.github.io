<script setup lang="ts">

import "./base.css"
import RightTab from "./components/tabs/RightTab.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";
import News from "./components/small/news.vue";
</script>

<template>
  <div class="full app-wrapper">
    <RightTab class="blue-border" style=""/>

    <Teleport to="body">
      <Sidebar/>
      <div class="flex-col" id="notifyContainer"></div>
      <News/>
    </Teleport>
  </div>
</template>

<style>
body, :root {
  background-image: linear-gradient(60deg, #0d1418 0%, #11161b 100%);
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.app-wrapper {
  position: absolute;
  display: flex;
  flex-direction: row;
  left: 0;
  flex-wrap: nowrap;
  top: var(--news-height);
}

#notifyContainer {
  top: 0;
  right: 0;
  z-index: 100;
  position: absolute;
  margin: 5px;
}

</style>