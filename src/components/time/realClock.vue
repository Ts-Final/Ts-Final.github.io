
<template>
  <p>{{newDate}}</p>
</template>

<style scoped>

</style>

<script lang="ts">
export default {
  name:"realClock",
  data() {
    return {
      newDate: new Date()
    }
  },
  mounted () {
    let that = this
    this.timer = setInterval(function () {
      let date = new Date()
      that.newDate = date.toLocaleString()
    })
  },
  beforeUnmount: function () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

}
</script>