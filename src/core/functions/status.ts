export enum Status {
  e=-1, // Error
  n, // No -> false
  y // Yes -> true
}

export type status = -1|0|1

export function statusToBoolean(value: status) {
  switch (value) {
    case 1: return true
    case 0: return false
    case -1: {
      console.trace()
      debugger
      throw new Error("Status: Error")
    }
  }
}