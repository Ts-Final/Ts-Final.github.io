<script setup lang="ts">

import CompanyUnit from "./companyUnit.vue";
import {GameDataBase} from "../../../../core/GameDataBase";
</script>

<template>
  <div class="full-w flex-row flex-wrap">
    <CompanyUnit :company="company" v-for="company in GameDataBase.Market.Company" />
  </div>
</template>

<style scoped>

</style>