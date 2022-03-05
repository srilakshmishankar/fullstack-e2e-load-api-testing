const db = {}
export default function createDB(table) {
  return {
    set: (key, value) => {
      db[`${table}-${key}`] = value
    },
    get: (key) => ({ id: key, ...db[`${table}-${key}`] }),
    list: () =>
      Object.keys(db)
        .filter((x) => x.startsWith(table))
        .map((x) => ({ id: x, ...db[x] })),
  }
}
