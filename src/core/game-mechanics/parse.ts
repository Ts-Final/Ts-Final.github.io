import {ResAffectTypes, ResourceTypes} from "../GameDataBase/resource.ts";
import {NotImplementedError, ValueNotFoundError} from "../functions/errors.ts";
import {affectSource} from "./resourceAffect.ts";
import {countryEnum} from "../GameDataBase/situation/country.ts";

export function parseResourceName(key: ResourceTypes) {
  switch (key) {
    case "energy":
      return "能量"
    case "copper":
      return "铜"
    case "air":
      return "空气"
    case "coal":
      return "煤"
    case "iron":
      return "铁"
    case "water":
      return "水"
    default:
      throw new ValueNotFoundError(`什么resource名字：${key}`)
  }
}

/**
 * 将各种影响（只做了research但无关紧要）编译成文字（？
 * @example
 * parseAffectName('research','太阳能扩张') -> "研究:太阳能扩张"
 *
 * @param type
 * @param name
 */
export function parseAffectName(type: affectSource, name: string) {
  switch (type) {
    case "research":
      return `研究:${name}`;
    case "NMP":
      throw new NotImplementedError()
  }
}

export function parseAffectType(type: ResAffectTypes) {
  switch (type) {
    case "maxMult":
      return "最大 +"
    case "maxAdd":
      return "最大 +"
    case "consume":
      return "消耗 -"
    case "pro":
      return "生产 +"
  }
}

export function parseAffectValue(v: number, type: ResAffectTypes = "pro"): string {
  switch (type) {
    case "pro":
      return Math.floor(v * 100) + "%"
    case "consume":
      return Math.floor(v * 100) + "%"
    case "maxAdd":
      return v + ''
    case "maxMult":
      return Math.floor(v * 100) + "%"
  }
  if (Math.abs(v) <= 0.5) {
    return parseAffectValue(v, 'pro')
  } else {
    return v + ''
  }
}

/**
 * 务必使用v-html
 * @param type 国家名字
 */
export function parseCountryName(type:keyof typeof countryEnum) {
  switch (type) {
    case "xi": return "锡"
    case "agleta":return "阿各塔"
    case "fatery":return "法谭"
    case "teLin":return "特林"
    case "tsFinal": return `<span class="rainbow-text">Ts.Final</span>`
  }
}