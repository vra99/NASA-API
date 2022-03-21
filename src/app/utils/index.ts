export function omit<T extends object, K extends keyof T>(target: T, ...omitKeys: K[]): Omit<T, K> {
  return (Object.keys(target) as K[]).reduce((res, key) => {
    if (!omitKeys.includes(key)) {
      res[key] = target[key];
    }
    return res;
  }, {} as any);
}

export function randomDate () {
  function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  return getRandomInt(2000,2021)+"-01-01";
}