export interface how2play {
  id: number
  title: string
  info: string
  unlocked: boolean
}

export const How2Play :how2play[] = [
  {
    id:1,
    title: '关于游戏',
    info: `
    <p style="text-align: center; padding: 10px 0 10px 0;margin: 0;font-size: 1.5rem">
    Terminal Society Incorporated.<br>
    <span class="rainbow-text">
    Decline EndWorld
    </span>
    </p>
    末式公司，是一家以建立平等社会为终极目的的联合公司。
    <p style="text-align: center">[调查中]</p>
    `,
    unlocked: true,
  },
  {
    id:2,
    title:'资源',
    info:`
    游戏进行中可以采集的各种物资。<br>
    通过各种方式可以获取各种物资，有些物资要到游戏的一定阶段（解锁了相应途径）之后才会开放获取，但是也会显示在表格中。<br>
    你的物资是有上下限的（基础为0~10000），超出这个范围的物资获取可能被暂停（参见各个物资获取途径的指引，可能会有提及）。<br>
    物资获取会受到一系列的影响。可以在 资源-详细 中查看各种影响效果及其来源。（由于某些原因，部分影响效果可能不会给出名字）<br>
    `,
    unlocked: true,
  },
  {
    id:3,
    title:'生产',
    info: `
    生产游戏中各种物资最常见的途径。<br>
    将鼠标覆盖在各个生产任务上方可以查阅该生产任务的物资产出、消耗（计算物资获取之前）
    `,
    unlocked: true
  },
]