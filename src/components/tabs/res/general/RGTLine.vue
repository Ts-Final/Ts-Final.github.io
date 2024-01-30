<template>
  <div>
    <p>{{res?.name}}</p>
    <p>{{res?.amount}}</p>
    <p>{{res?.maximum}}</p>
    <p>{{res?.produceChange?.allChange}}</p>
    <p>{{res?.consumeChange?.allChange}}</p>
  </div>

</template>


<script lang="ts">
import {ResourceClass} from "../../../../core/resource/Resource.ts";

export default {
  name:"RGTLine",
  props:{
    res:ResourceClass
  }
}
</script>