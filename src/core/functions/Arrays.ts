export class ValueNotFoundError extends Error {
  constructor(msg:string, ...data:any[]) {
    super(msg)
    console.log(data)
  }
}

export function ArrayFind<T>(array:T[],f:(arg:T)=>boolean ) {
  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) {return array[i]}
  }
  throw new ValueNotFoundError("Didn't find the value satisfies the condition in array", array)
}