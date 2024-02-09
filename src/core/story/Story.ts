import {StoryClass as story} from "./class.ts";
import {StoryContent} from "./storyContents.ts";
const T = () => true

export const Story: {[x:number]: story} = {
  1: new story('ST-0-0', "序",    "有人亲眼见证世界。有人却无望。",    StoryContent.main.ch1.st0, T),
  2: new story('ST-0-1', "苦往",    "过去：痛苦或追忆，而废墟中爬出的是不甘的希望。", StoryContent.main.ch1.st1, T),
  3: new story('ST-0-2', "恐慌",'"兴——百姓苦；亡，百姓苦"。', StoryContent.main.ch1.st2, T),
  4: new story('ST-0-3', '野火', '■之梦，■之火。\n"我不愿看见，一切苦难与痛恨。"', StoryContent.main.ch1.st3, T),
  5: new story('ST-0-4', '相遇', '"是致是友，你自知。"信任与危机，机会只在一瞬间。\n＊风雨际会。其如是发端，于无处不尽。*', StoryContent.main.ch1.st4,T ),
  6: new story('ST-0-5', "荒野","草原，无人顾暇，终归荒野。\n*野火肆虐，留下的只剩哀鸣。*", StoryContent.main.ch1.st5, T),
  7: new story('ST-0-6', "纷乱", "旗子指向无相的远方，随波的人们逐向虚无。",StoryContent.main.ch1.st6, T),
  8: new story('ST-0-6-1', "#1", "",StoryContent.main.ch1.st6fg1, T),
  9: new story('ST-0-F', '静寂之城，无垠之夜', "她从未想过，可眼前即是光明。", StoryContent.main.ch1.stF, T),
  10: new story('EST-0', "无垠，惨白荒原", "她迷失在了无垠的黑暗中。",StoryContent.main.ch1.Est0, T)

}
export function storyCalc() {
  let i: {[x:string]: number} = {}
  let f = 0
  for (const [,storyClass] of Object.entries(Story)) {
    i[storyClass.id] = storyClass.content.length
    f += storyClass.content.length
  }
  return i
}