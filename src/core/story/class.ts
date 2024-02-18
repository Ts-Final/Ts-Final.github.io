import {ref, Ref} from "vue";

export class StoryClass {
  readonly id: string
  name: string
  des: string
  content: string
  unlocked: Ref<boolean>
  unlock: () => boolean

  /**
   *
   * @param id {string} story的编号
   * @param name
   * @param des
   * @param content
   * @param unlock
   *
   * @example
   * new StoryClass(
   *  id:"ST-0-0"
   *  name: "序"
   *  des: "有人亲眼见证世界。有人却无望。"
   *  content: ...
   *  unlock: () => index.resource.
   */
  constructor(id: string,
  name: string,
  des: string,
  content: string,
  unlock: () => boolean) {
    this.id = id
    this.name = name
    this.des = des
    this.content = content
    this.unlock = unlock
    this.unlocked = ref(false)
  }
  update() {
    if (!this.unlocked.value){
      this.unlocked.value = this.unlock()
    }
  }

}