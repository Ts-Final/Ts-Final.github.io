import {displayEnum} from "../GameDataBase/display.ts";

/**
 * 在每一个component的setup中应该有一个update的method
 * 务必在onMounted/onUnMounted中加入、移除，减少性能开销
 */
export const gameUpdateDisplays = {
  [displayEnum.baseLayouts]: [],
  [displayEnum.resourceGeneral]: [],
  [displayEnum.resourceDetail]: [],
  [displayEnum.task]: [],
  [displayEnum.research]: [],
  [displayEnum.storyMain]: [],
  [displayEnum.storySide]: [],
  [displayEnum.storyExtra]: [],
  [displayEnum.h2p]: [],
  [displayEnum.marketUpgrade]: [],
  [displayEnum.marketPrice]: [],
  [displayEnum.marketExchange]: [],
  [displayEnum.marketCompany]: [],
} as { [key: number]: Function[] }
// define its type here. or fucking Volar will cause err.

/*
  /!**
   * a check for display
   *!/
  (function (){
  for (const displayKey in displayEnum) {
    if (!(displayEnum[displayKey].toString() in Object.keys(gameUpdateDisplays))) {
      throw new Error(`Display tab ${displayKey} not in gameUpdateDisplays`)
    }
  }
})()*/
