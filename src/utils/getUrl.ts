/* eslint-disable no-redeclare */
/* eslint-disable unused-imports/no-unused-vars */

export function getUrl<T = unknown>(pathname: string): string
export function getUrl<T extends Record<string, number | string>>(pathname: string, parameter: T): string
export function getUrl<T extends Record<string, number | string>>(pathname: string, parameter?: T) {
  if (!parameter) {
    return pathname
  }

  let url = pathname
  const matchedParameters = Array.from(pathname.matchAll(/\[(.*?)\]/g)).map((matchedArray) => matchedArray[1])

  matchedParameters.forEach(
    (matchedParameter) =>
      (url = url.replace(`[${matchedParameter}]`, `${encodeURIComponent(parameter[matchedParameter]) ?? ''}`))
  )

  return url
}
