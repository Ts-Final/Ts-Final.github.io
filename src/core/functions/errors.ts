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