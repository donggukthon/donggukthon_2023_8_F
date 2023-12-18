import { axiosGET } from '@apis/base'
import { generateQueryKey } from '@utils/generateQueryKey'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { TreeListType } from 'types/common'
import { StatusType } from 'types/status'

export type GetTreeListRequestType = {}

export type GetTreeListResponseType = {
  data: TreeListType
} & StatusType

const getTreeListQueryPath = (_param: GetTreeListRequestType) => `/tree/list.php`

const getTreeList = (params: GetTreeListRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetTreeListRequestType, GetTreeListResponseType>(getTreeListQueryPath(params), params, config)
}

export const getTreeListQueryKey = (params: GetTreeListRequestType) =>
  `${getTreeListQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetTreeListQuery = async (queryClient: QueryClient, variables: GetTreeListRequestType) => {
  await queryClient.prefetchQuery(getTreeListQueryKey(variables), () => getTreeList(variables))

  return queryClient.getQueryState<GetTreeListResponseType>(getTreeListQueryKey(variables))
}

export const useGetTreeListQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetTreeListRequestType
  options?: Omit<UseQueryOptions<GetTreeListResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetTreeListResponseType>(
    getTreeListQueryKey(variables),
    () => getTreeList(variables, axiosConfig),
    options
  )
}
