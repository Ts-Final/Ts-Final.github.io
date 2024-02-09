import {ResourceClass} from "./class/ResourceClass.ts";


export const Resource:{[x:string]:ResourceClass} = {
  energy: new ResourceClass("energy","能量"),
  iron: new ResourceClass("iron","铁"),
  coal: new ResourceClass("coal","煤"),
  water: new ResourceClass('water',"水"),
  air: new ResourceClass('air',"空气"),
  copper: new ResourceClass('copper',"铜"),
}

