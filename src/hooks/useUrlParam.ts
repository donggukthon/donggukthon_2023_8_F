import { getUrlParam } from '@utils/getUrlParam'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useUrlParam = (name: string, defaultValue: string): [string, (_: string) => void] => {
  const { query, push } = useRouter()

  const paramValue = getUrlParam(query[name], defaultValue)
  const setParam = useCallback(
    (newValue: any) => {
      if (newValue === paramValue) {
        return
      }

      push({ query: { ...query, [name]: newValue } })
    },
    [name, paramValue, push, query]
  )

  return [paramValue, setParam]
}
