import {ResearchClass, ResearchInfClass} from "./class.ts";

export const Research:{[x:number]:ResearchClass} = {
  1: new ResearchClass(1,
    '电板扩建',
    '加几块太阳能板，也许可以让发电更多一点',
    '楼顶一片黑。下面的人看了都说好，太阳是照不到了，不过也看不见了。',
    [['iron', 10]],
    [['energy', 'pro', 0.05]],
    10,
    ()=> true,)
}

export const ResearchInf: {[x:number]: ResearchInfClass} = {

}