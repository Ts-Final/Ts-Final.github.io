import {Resource} from "./resource/Resource.ts";
import {Tasks} from "./task/Tasks.ts";
import {Ref, ref} from "vue";
import {Display} from "./display.ts";

export const _player = {
  display:Display,
  resource:Resource,
  tasks: Tasks,

}

declare global {
  interface Window {
    player: any
  }
}

export const player: Ref<typeof _player>= ref(_player)
window["player"] = player.value

export function update() {
  for (const taskKey in _player.tasks) {
    _player.tasks[taskKey].update()
  }
  for (const resKey in _player.resource) {
    _player.resource[resKey].update()
  }
}

setInterval(update, 1000)