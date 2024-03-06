/**
 * 移除target中的元素
 *
 * @template T
 * @param target {Array<T>}
 * @param values {T[]}
 */
export function removeFromArray<T>(target:T[], ...values:T[]) {
  for (let i = 0; i < target.length; i++) {
    if (target[i] in values) {
      target.splice(i,1)
    }
  }
}