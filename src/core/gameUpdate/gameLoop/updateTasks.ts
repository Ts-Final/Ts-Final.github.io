import {GameDataBase} from "../../GameDataBase";
import {player} from "../../player";
import {canResourceChange, doResourceChange} from "../../game-mechanics/resourceChange.ts";
import {notify} from "../../functions/notify.ts";

export function updateTasks() {
  for (let key = 0; key < GameDataBase.Tasks.length; key++) {

    const task = GameDataBase.Tasks[key]
    // unlock check
    if (!player.task[key][1]) {
      player.task[key][1] = task.unlock
      if (player.task[key][1]) {
        notify.success(`解锁生产：${task.name}`, 1000)
      }
    }
    // activate check
    if (!player.task[key][0]) {
      continue
    }

    // About Resources
    // these code seems absolutely ugly
    let canProduce = true
    for (let i = 0; i < task.produce.length; i++) {
      let [resKey, value] = task.produce[i]
      if (!canResourceChange(resKey, value, true)) {
        canProduce = false
      }
    }
    if (!canProduce) {
      continue
    }
    for (let i = 0; i < task.cost.length; i++) {
      let [resKey, value] = task.cost[i]
      if (!canResourceChange(resKey, value, false)) {
        canProduce = false
      }
    }
    if (!canProduce) {
      continue
    }

    for (let i = 0; i < task.produce.length; i++) {
      let [resKey, value] = task.produce[i]
      doResourceChange(resKey, value, true)
    }
    for (let i = 0; i < task.cost.length; i++) {
      let [resKey, value] = task.cost[i]
      doResourceChange(resKey, value, false)
    }

  }
}