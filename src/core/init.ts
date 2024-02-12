import {GameDataBase} from "./GameDataBase";
// import {registerAffect} from "./resourceAffect.ts";

/**
 * TODO:Finish
 */
function initResource() {

}
function initResearch() {
  for (const research of Object.values(GameDataBase.Researches)) {
    for (let i = 0; i < research.affect.length; i++) {
      // let a = research.affect[i]
      // registerAffect(a[0],a[1],a[2],`研究:${research.name}`)
    }
  }
}

export function init() {
  initResearch()
  initResource()
}