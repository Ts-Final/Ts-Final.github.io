import "./h2p.css"

export interface how2play {
  id: number
  title: string
  info: string
  unlocked: boolean
}
export const version = "Test-06"

let setUpDate = new Date(2022, 5, 28)
let passedDays = Math.floor((Date.now() - setUpDate.getTime()) / (1000 * 60 * 60 * 24))
export const How2Play: how2play[] = [
  {
    id: 1000,
    title: '关于游戏',
    info: `
    <p class="small-title size-1.5rem">
    Terminal Society Incorporated.<br>
    <span class="rainbow-text">
    Decline EndWorld
    </span>
    </p>
    末式公司，是一家以建立平等社会为终极目的的联合公司。<br>
    作为公司目前实际领导人，你需要从最基础开始管理（其实没有多少）。<br><br>
    以上是设定。本游戏是从Space Travel Idle
    <a style="color:#d7ec31" href="https://store.steampowered.com/app/1407860/">(steam)</a>
    改变而来，加入了作者设定的一些世界观使本游戏稍微丰富一点（作者发疯确认）。<br>
    本游戏于2022/5/28立项。（现在已经过去了${passedDays}天）
    `,
    unlocked: true,
  },
  {
    id: 1001,
    title: "致谢",
    info: `
    <p class="small-title">
    （以下排名不分先后，部分名字暂时以缩写代替）<br>
    部分带有点的为名字缩写或比较泛用代号，个人名义<br>
    <span class="rainbow-text">（游戏都没做完你就致谢了？）</span>
    </p>
    <p class="small-title size-1.25rem shadow">Creator</p>
    <p class="small-title rainbow-text">Ts.Final</p>
    <p class="small-title size-1.25rem shadow">Ts.Inc Assistants</p>
    <div class="credit-3col">
      <p>Kun.</p>
      <p>HW.</p>
      <p>RJY.</p>
      <p>Ryuji</p>
      <p>MCY.</p>
      <p>WQX.</p>
    </div>
    <p class="small-title size-1.25rem shadow">Special Thanks</p>
    <div class="credit-3col">
      <p>Arcaea中文维基</p>
      <p>一直等待本游戏的各位</p>
      <p>Felleta Inc.</p>
      <p>Vue Vite</p>
      <p>作者的电脑</p>
    </div>
    <p class="small-title size-1.5rem rainbow-text">Thank for your playing!</p>
    `,
    unlocked: false
  },
  {
    id: 1,
    title: '资源',
    info: `
    游戏进行中可以采集的各种物资。<br>
    通过各种方式可以获取各种物资，有些物资要到游戏的一定阶段（解锁了相应途径）之后才会开放获取，但是也会显示在表格中。<br>
    你的物资是有上下限的（基础为0~10000），超出这个范围的物资获取可能被暂停（参见各个物资获取途径的指引，可能会有提及）。<br>
    物资获取会受到一系列的影响。可以在 资源-详细 中查看各种影响效果及其来源。（由于某些原因，部分影响效果可能不会给出名字）<br>
    `,
    unlocked: true,
  },
  {
    id: 2,
    title: '生产',
    info: `
    生产游戏中各种物资最常见的途径。<br>
    将鼠标覆盖在各个生产任务上方可以查阅该生产任务的物资产出、消耗（计算物资获取之前）。
    `,
    unlocked: true
  },
  {
    id:3,
    title: "市场",
    info: `
    你游最没做好的东西。<br>
    按下 Alt+M 可以刷新当前交易、价格（正常是每天刷新，但是由于是用的随机所以有概率导致运气差到没有，提供补偿措施吧。<br>
    这个也没想好怎么写。 
    `,
    unlocked: true,
  },
  {
    id:4,
    title:"求助",
    info: `
    如果你有需要，可以在<a href="https://github.com/Ts-Final/Terminal-Society-SourceCode">Github(链接)</a>上提出issue反馈，如果无法访问github可以通过qq联系我（你从哪个群得知你游就从哪里找我）<br>
    请不要对一些刻意设计提出疑问，虽然我还是能解决问题（不过还没有刻意设计）<br>
    <div class="self-center full-w" style="font-size: 3rem">当前版本为${version}，尚未完成！</div>
    `,
    unlocked:true,
  }
]