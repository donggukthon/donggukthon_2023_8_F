export const getUrlParam = (value: string | string[] | undefined, defaultValue: string) => {
  if (!value) {
    return defaultValue
  }

  if (Array.isArray(value)) {
    return value[0] ?? defaultValue
  }

  return value ?? defaultValue
}

export const getArrayUrlParam = (value: string | string[] | undefined, defaultValue: string[] = []) => {
  if (!value) {
    return defaultValue
  }

  if (Array.isArray(value)) {
    return value
  }

  return [value]
}
