<script setup lang="ts">
import {ResourceTypes} from "../../../core/GameDataBase/types.ts";
import {parseResourceName} from "../../../core/resource.ts";

const {rc, produce} = defineProps<{rc:[ResourceTypes,number],produce:boolean}>()
const name = parseResourceName(rc[0])
</script>

<template>
  <div class="res" :class="{pro:produce, cost:!produce}">
    <p>{{name}}</p>
    <p>{{rc[1]}}/s</p>
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