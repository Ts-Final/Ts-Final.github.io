//深度拷贝json对象的函数
export function deepClone<T>(source: T): T {
  let newObject: any;
  let isArray: boolean;
  if ((source as any).length) {
    newObject = [];
    isArray = true;
  } else {
    newObject = {};
    isArray = false;
  }

  for (let key of Object.keys(source as Object)) {
    if (source[key as keyof typeof source] == null) {
      if (isArray) {
        newObject.push(null);
      } else {
        newObject[key] = null;
      }
    } else {
      let sub = (typeof source[key as keyof typeof source] == 'object')
        ? deepClone(source[key as keyof typeof source]) : source[key as keyof typeof source];
      if (isArray) {
        newObject.push(sub);
      } else {
        newObject[key] = sub;
      }
    }
  }
  return newObject;
}