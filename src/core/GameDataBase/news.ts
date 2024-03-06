export interface NewsTick {
  content: string
  id: number

  unlocked(): boolean
}

export const News: NewsTick[] = [
  {
    id: 1,
    content: "所以人们还是拒绝承认他们杀死了这个世界。看着满地的灰烬，最终失去了思索和表达的能力，思绪于一瞬间停止。",
    unlocked() { return true }
  },
  {
    id: 2,
    content: "事实上还有人处于苦难之中。所以现在还不是休息的时候，我们仍有被需要的价值。",
    unlocked(): boolean {
      return true
    }
  },
  {
    id: 3,
    content: "从不起眼的角落里，我们翻出了那个排气扇。提出“把它倒过来”用的那位其实也事实上——算是个天才吧。",
    unlocked() { return true }
  },
]