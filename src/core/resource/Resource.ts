import {ResourceClass} from "./class/ResourceClass.ts";


export const Resource:{[x:string]:ResourceClass} = {
  energy: new ResourceClass("energy"),
  iron: new ResourceClass("iron"),
  coal: new ResourceClass("coal"),
  water: new ResourceClass("water"),
  air: new ResourceClass("air"),
  copper: new ResourceClass("copper"),
}

