import { axiosGET } from '@apis/base'
import { generateQueryKey } from '@utils/generateQueryKey'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { StatusType } from 'types/status'

export type GetTreeDetailsRequestType = {
  id: number
}

export type GetTreeDetailsResponseType = {
  data: {
    createdAt: string
    email: string
    name: string
    meta: string | null
  }
} & StatusType

const getTreeDetailsQueryPath = (params: GetTreeDetailsRequestType) => `/tree/details/${params.id}`

const getTreeDetails = (params: GetTreeDetailsRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetTreeDetailsRequestType, GetTreeDetailsResponseType>(
    getTreeDetailsQueryPath(params),
    params,
    config
  )
}

export const getTreeDetailsQueryKey = (params: GetTreeDetailsRequestType) =>
  `${getTreeDetailsQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetTreeDetailsQuery = async (queryClient: QueryClient, variables: GetTreeDetailsRequestType) => {
  await queryClient.prefetchQuery(getTreeDetailsQueryKey(variables), () => getTreeDetails(variables))

  return queryClient.getQueryState<GetTreeDetailsResponseType>(getTreeDetailsQueryKey(variables))
}

export const useGetTreeDetailsQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetTreeDetailsRequestType
  options?: Omit<UseQueryOptions<GetTreeDetailsResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetTreeDetailsResponseType>(
    getTreeDetailsQueryKey(variables),
    () => getTreeDetails(variables, axiosConfig),
    options
  )
}
