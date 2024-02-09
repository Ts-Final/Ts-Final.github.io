import {Resource} from "./resource/Resource.ts";
import {Tasks} from "./task/Tasks.ts";
import {Display} from "./display.ts";
import {Research} from "./research/Research.ts";
import {Story, storyCalc} from "./story/Story.ts";

export const player = {
  display:Display,
  resource:Resource,
  tasks: Tasks,
  research: Research,
  story: Story,
  storyCalc: storyCalc
}

declare global {
  interface Window {
    player: any
  }
}

window["player"] = player

export function update() {
  for (const taskKey in player.tasks) {
    player.tasks[taskKey].update()
  }
  for (const rchKey in player.research) {
    player.research[rchKey].update()
  }

  // Last
  for (const resKey in player.resource) {
    player.resource[resKey].update()
  }
}

setInterval(update, 1000)