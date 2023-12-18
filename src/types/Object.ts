// return object key type
export type ObjectKeys<T> = T extends Record<string, unknown> ? keyof T : never

// return object value type
export type ObjectValues<T> = T extends Record<string, unknown> ? T[keyof T] : never

// return object key, value type
export type ObjectEntries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]
