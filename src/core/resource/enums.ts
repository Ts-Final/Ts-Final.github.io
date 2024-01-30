/**
 * 所有Resource消耗的类型
 */
export enum ResourceChangeTypes {
  task = "Task",
  research = "Research",
}

/**
 * Resource消耗类型的记录
 */
export class ResourceChangeData {
  task: number = 0
  research: number = 0

  allChange :number = 0
  calcAllChange() {
    this.allChange = this.task + this.research
    this.task = 0
    this.research = 0
  }
}
