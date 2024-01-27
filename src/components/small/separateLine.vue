<template>
  <div class="line"></div>
</template>

<style scoped>
.line {
  width: 100%;
  min-width: 100%;
  max-height: v-bind(width)px;
  color: #888888;

}

</style>

<script lang="ts">

export default {
  name: "SeparateLine",
  props: {
    width: Number
  }
}
</script>