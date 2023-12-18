import { ObjectEntries } from 'types/Object'

export const entries = <T extends Record<string, any>>(obj: T): ObjectEntries<T> => {
  return Object.entries(obj)
}
