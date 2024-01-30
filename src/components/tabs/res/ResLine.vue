<script setup>

</script>

<template>
  <div class="res-line-top" :class="{pro:isPro, cost:!isPro}">
    <p>{{type}}</p>
    <p>{{amount}}<span v-if="perSec">/s</span></p>
  </div>

</template>

<style scoped>
.res-line-top {
  display: grid;
  grid-template-columns: 50% 40%;
  text-align: center;
  color: #b8dcee;
}
.pro {
  background-image: linear-gradient(to right, #3fe13f88 0%, #00000000 90%);
}
.cost {
  background-image: linear-gradient(to right, #ff191988 0%, #00000000 90%);
}
</style>

<script lang="ts">
export default {
  props: {
    type: String,
    perSec: Boolean,
    amount:Number,
    isPro:{type:Boolean, default:true}
  }
}
</script>