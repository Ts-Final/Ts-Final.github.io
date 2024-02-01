import {ref} from "vue";

export const Display = {
  key:"resource",

  resource:ref(true),
  task:ref(false),
  research:ref(false),
  researchInf: ref(false)
}

export function changeDisplay(key:keyof typeof Display):void {
  Display.resource.value = key == "resource"
  Display.task.value = key == "task"
  Display.research.value = key == 'research'
  Display.researchInf.value = key == 'researchInf'

  Display.key = key
}