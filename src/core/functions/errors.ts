/**
 * Only used for development.
 * Yet if i didnt made it
 */
export class NotImplementedError extends Error {
  constructor(msg?:string) {
    console.trace()
    super(msg)
  }

}

export class ValueNotFoundError extends Error {
  constructor(msg: string, ...data: any[]) {
    super(msg)
    console.log(data)
  }
}