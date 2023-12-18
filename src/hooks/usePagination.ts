import { getPageParam } from '@utils/getPageParam'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

export const PAGE_PARAMETER_NAME = 'page'

export const usePagination = (defaultPage = 0) => {
  const { query, push } = useRouter()
  const currentPage = getPageParam(query[PAGE_PARAMETER_NAME], defaultPage)

  const moveTo = useCallback(
    (page: any) => {
      if (page === currentPage) {
        return
      }
      push({ query: { ...query, [PAGE_PARAMETER_NAME]: page + 1 } })
    },
    [currentPage, push, query]
  )

  return useMemo(() => ({ currentPage, moveTo }), [currentPage, moveTo])
}
