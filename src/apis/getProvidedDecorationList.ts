import { axiosGET } from '@apis/base'
import { generateQueryKey } from '@utils/generateQueryKey'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { ProvidedDecorationListType } from 'types/common'
import { StatusType } from 'types/status'

export type GetProvidedDecorationListRequestType = {}

export type GetProvidedDecorationListResponseType = {
  data: ProvidedDecorationListType
} & StatusType

const getProvidedDecorationListQueryPath = (_param: GetProvidedDecorationListRequestType) =>
  `/provided-decoration/list.php`

const getProvidedDecorationList = (params: GetProvidedDecorationListRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetProvidedDecorationListRequestType, GetProvidedDecorationListResponseType>(
    getProvidedDecorationListQueryPath(params),
    params,
    config
  )
}

export const getProvidedDecorationListQueryKey = (params: GetProvidedDecorationListRequestType) =>
  `${getProvidedDecorationListQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetProvidedDecorationListQuery = async (
  queryClient: QueryClient,
  variables: GetProvidedDecorationListRequestType
) => {
  await queryClient.prefetchQuery(getProvidedDecorationListQueryKey(variables), () =>
    getProvidedDecorationList(variables)
  )

  return queryClient.getQueryState<GetProvidedDecorationListResponseType>(getProvidedDecorationListQueryKey(variables))
}

export const useGetProvidedDecorationListQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetProvidedDecorationListRequestType
  options?: Omit<UseQueryOptions<GetProvidedDecorationListResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetProvidedDecorationListResponseType>(
    getProvidedDecorationListQueryKey(variables),
    () => getProvidedDecorationList(variables, axiosConfig),
    options
  )
}
