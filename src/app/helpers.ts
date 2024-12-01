export function addIds<T>(
  items: T[] | ReadonlyArray<T>
): (T & { id: number })[] {
  let id = 0;
  return items.map((item) => ({
    ...item,
    id: id++,
  }));
}
