<script setup lang="ts">

import "./base.css"
import LeftBar from "./components/LeftBar.vue";
import RightTab from "./components/tabs/RightTab.vue";
</script>

<template>
  <div class="full app-wrapper" @keyup.s.ctrl="">
    <LeftBar class="blue-border" style="border-right: none"/>
    <RightTab class="blue-border" style=""/>

    <Teleport to="body">
      <div class="flex-col" id="notifyContainer"></div>
    </Teleport>
  </div>
</template>

<style>
body,:root {
  background-image:linear-gradient(60deg, #0d1418 0%, #11161b 100%);
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
.app-wrapper{
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  flex-wrap: nowrap;
}
#notifyContainer {
  top: 0;
  right: 0;
  z-index: 100;
  position:absolute;
  margin: 5px;
}

</style>