<script setup lang="ts">

import {Ref, ref} from "vue";
import {GameDataBase} from "../../core/GameDataBase";
import {randomElement} from "../../core/functions/random.ts";
import {NewsTick} from "../../core/GameDataBase/news.ts";
import {EventHub, GameEvent} from "../../core/gameUpdate/eventHub.ts";

const span: Ref<HTMLSpanElement | undefined> = ref()
const contain: Ref<HTMLDivElement | undefined> = ref()

/**
 * Length max: 10
 * 在news还不够多的时候先1吧
 */
const recentNews: NewsTick[] = []
const recentNewsMax = 1

/*function update() {
  if (!span.value) {
    return
  }
  if (moved.value > moveLength.value) {
    span.value.style.opacity = "0"
    currentNews.value = randomValueFromArray(GameDataBase.News.filter((v) => v.unlocked())).content
    transform.value = `translateX(calc(${1920}px ))`
    moveLength.value = 1920 + span.value?.offsetWidth
    moved.value = 0
    span.value.style.opacity = "1"
    console.trace(moveLength.value)
  } else {
    moved.value += 3
    transform.value = `translateX(calc(${window.innerWidth - moved.value}px ))`
  }
}

gameUpdateDisplays[displayEnum.baseLayouts].push(update)*/

function changeNextNews() {
  if (span.value == undefined) {
    setTimeout(changeNextNews, 500)
    return
  }

  let nextNews = randomElement(GameDataBase.News.filter((x) => x.unlocked()))
  while (recentNews.includes(nextNews)) {
    nextNews = randomElement(GameDataBase.News.filter((x) => x.unlocked()))
  }
  recentNews.push(nextNews)
  while (recentNews.length > recentNewsMax) {
    recentNews.shift()
  }

  span.value.innerHTML = nextNews.content // set the content
  span.value.style["transitionDuration"] = "0s"
  span.value.style['transform'] = "translateX(0)"

  setTimeout(setDuration, 500)

}

function setDuration() {
  if (span.value == undefined || contain.value == undefined) {
    setTimeout(setDuration, 500)
    return
  }
  const scrollSpeed = 140 // px /s
  const duration = (span.value?.clientWidth + contain.value?.clientWidth) / scrollSpeed
  span.value.style["transform"] = "translateX(-100%)"

  span.value.style['transitionDuration'] = duration + "s"

  setTimeout(changeNextNews, duration * 1000)
}

changeNextNews()
EventHub.addHandler(GameEvent.UPDATE_NEWS, changeNextNews)

</script>

<template>
  <div class="news" ref="contain">
    <span class="news-ticker" ref="span"></span>
  </div>
</template>

<style scoped>
.news {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  background-image: var(--bgi);
  display: flex;
  align-items: center;
}

.news-ticker {
  transition: transform linear;
  position: relative;
  color: #7cdcf4;
  pointer-events: none;
  padding-left: 100%;
  white-space: nowrap;

}
</style>