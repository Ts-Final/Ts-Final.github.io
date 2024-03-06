import {GameEvent} from "./gameEvent.ts";
import {gameLoop, updateDisplay} from "./gameLoop";
import {updateMarketRefresh} from "./gameLoop/updateMarket.ts";

interface eventHubInterface {
  handlers: { [x: string]: Function[] }
  events: string[]
}

class eventHub implements eventHubInterface {
  handlers: { [x: string]: Function[] } = {
    [GameEvent.UPDATE]: [gameLoop],
    [GameEvent.UPDATE_DISPLAY]: [updateDisplay],
    [GameEvent.UPDATE_NEWS]: [],
    [GameEvent.MARKET_UPDATE]: [updateMarketRefresh],
    [GameEvent.MARKET_EXCHANGE_UPDATE]: [],
    [GameEvent.UPDATE_H2P]: [],
    [GameEvent.UPDATE_TAB]: [],
  }

  events: string[];

  constructor() {
    this.events = []
  }

  dispatch(event: string) {
    this.events.push(event)
  }

  update() {
    for (const event of this.events) {
      this.handlers[event].forEach((v)=>v())
    }
    this.events = []
    updateDisplay()
  }

  updateEvent(event: string) {
    if (!(event in this.handlers)) {
      throw new Error(`unknown Event ${event}`)
    }
    this.handlers[event].forEach((v)=>v())
  }

  addHandler(event:string,...fn:Function[]) {
    if (!(event in this.handlers)) {
      throw new Error(`unknown Event ${event}`)
    }
    this.handlers[event].push(...fn)
  }
}

export const EventHub = new eventHub()
export {GameEvent}