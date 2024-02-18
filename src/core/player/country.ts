import {countryEnum} from "../GameDataBase/situation/country.ts";

function getCountryDict() {
  return {
    relation: 0
  }
}
export const country: {[key in countryEnum]:any} = {
  xi: getCountryDict(),
  teLin: getCountryDict(),
  agleta: getCountryDict(),
  fatery: getCountryDict(),
  tsFinal: getCountryDict(),
}