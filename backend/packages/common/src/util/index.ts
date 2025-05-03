/* eslint-disable @typescript-eslint/no-explicit-any */
export function toLowerCaseObj(obj: object): any {
  const res = {} as any;
  for (const [key, val] of Object.entries(obj)) {
    res[key.toLowerCase() as any] = val;
  }
  return res;
}
