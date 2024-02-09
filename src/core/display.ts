import {ref} from "vue";

export const Display = {
  key:"resource",

  resource:ref(true),
  task:ref(false),
  research:ref(false),
  researchInf: ref(false),
  storyMain: ref(false),
  storySide: ref(false),
  storyExtra: ref(false),

}

export function changeDisplay(key:keyof typeof Display):void {
  Display.resource.value = key == "resource"
  Display.task.value = key == "task"
  Display.research.value = key == 'research'
  Display.researchInf.value = key == 'researchInf'
  Display.storyMain.value = key == 'storyMain'
  Display.storySide.value = key == 'storySide'
  Display.storyExtra.value = key == 'storyExtra'

  Display.key = key
}