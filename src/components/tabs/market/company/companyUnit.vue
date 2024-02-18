<script setup lang="ts">

import {company as com} from "../../../../core/GameDataBase/market/company.ts";
import {parseCountryName, parseResourceName} from "../../../../core/game-mechanics/parse.ts";
import {ResourceTypes} from "../../../../core/GameDataBase/resource.ts";

const {company} = defineProps<{company: com}>()

function allResource(resKey:ResourceTypes) {
  const isADV = resKey in company.advantage
  let resKey1 = parseResourceName(resKey)
  return isADV ? `<span style="color: #f7f12c;">${resKey1}</span>` : resKey1
}
</script>

<template>
  <div class="gameUnit medium-size blue-border flex-col">
    <div class="flex-row space-around">
      <div>{{company.name}}</div>
      <div v-html="parseCountryName(company.country)"></div>
    </div>
    <div class="flex-col">
      <div>可交易资源类型：</div>
      <div class="flex-row space-around">
        <span v-for="resKey in company.allResource"
              v-html="allResource(resKey)"></span>
      </div>
    </div>
    <div class="gameUnit-popout flex-col blue-border">
      <div>
        {{company.des}}
      </div>
      <br>
      <div>
        增产系数：{{company.advPow[0]}}~{{company.advPow[1]}}
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>