<script setup lang="ts">

</script>

<template>
  <div class="res" :class="{pro:rc?.produce, cost:!rc?.produce}">
    <p>{{rc?.res.name}}</p>
    <p>{{rc?.value}}/s</p>
  </div>

</template>

<style scoped>
.res {
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: #b8dcee;
  height: 2em;
}
p {
  margin-top: 0.3rem;
}
.pro {
  background-image: linear-gradient(to right, #3fe13f88 0%, #00000000 90%);
}

.cost {
  background-image: linear-gradient(to right, #ff191988 0%, #00000000 90%);
}
</style>

<script lang="ts">
import {ResourceChange} from "../../../core/resource/class/ResourceChange.ts";

export default {
  props: {
    rc:ResourceChange
  }
}
</script>