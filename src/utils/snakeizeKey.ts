import { isArray, isObject, snakeCase, transform } from 'lodash'

export const snakeizeKey = (obj: Record<string, any>) =>
  transform<any, Record<string, any>>(obj, (acc, value, key, target) => {
    const snakeKey = isArray(target) ? key : snakeCase(key)

    acc[snakeKey] = isObject(value) ? snakeizeKey(value) : value
  })
