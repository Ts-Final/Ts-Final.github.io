export enum displayEnum {
  resourceGeneral = "resourceGeneral",
  resourceDetail = "resourceDetail",
  task = "task",
  research = "research",
  storyMain = "storyMain",
  storySide = "storySide",
  storyExtra = "storyExtra",
  h2p = "h2p",
  marketUpgrade = "marketUpgrade",
  marketPrice = "marketPrice",
  marketExchange = 'marketExchange',
  marketCompany = "marketCompany"
}

export const display: { [key in displayEnum]: boolean } = {
  resourceGeneral: true,
  resourceDetail: false,
  task: false,
  research: false,
  storyMain: false,
  storySide: false,
  storyExtra: false,
  h2p: false,
  marketUpgrade: false,
  marketPrice: false,
  marketExchange:false,
  marketCompany: false,
}