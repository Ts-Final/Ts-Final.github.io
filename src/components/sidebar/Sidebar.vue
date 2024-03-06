<script setup lang="ts">
import {GameDataBase} from "../../core/GameDataBase";
import SidebarTab from "./SidebarTab.vue";
</script>

<template>
  <div class="sidebar-wrapper">
    <SidebarTab
        v-for="tab in GameDataBase.Tabs"
        :key="tab.name"
        :Tab="tab"
    />
  </div>

</template>

<style scoped>
.sidebar-wrapper {
  width: var(--left-bar-width);
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: var(--z-topbar);
  align-items: center;
}
.sidebar-wrapper :last-child {
  border-bottom: 1px solid;
}

</style>