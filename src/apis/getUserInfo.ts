import { axiosGET } from '@apis/base'
import { generateQueryKey } from '@utils/generateQueryKey'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { MemberItemType } from 'types/common'
import { StatusType } from 'types/status'

export type GetUserInfoRequestType = {}

export type GetUserInfoResponseType = {
  data: MemberItemType
} & StatusType

const getUserInfoQueryPath = (_param: GetUserInfoRequestType) => `/member/info`

const getUserInfo = (params: GetUserInfoRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetUserInfoRequestType, GetUserInfoResponseType>(getUserInfoQueryPath(params), params, config)
}

export const getUserInfoQueryKey = (params: GetUserInfoRequestType) =>
  `${getUserInfoQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetUserInfoQuery = async (queryClient: QueryClient, variables: GetUserInfoRequestType) => {
  await queryClient.prefetchQuery(getUserInfoQueryKey(variables), () => getUserInfo(variables))

  return queryClient.getQueryState<GetUserInfoResponseType>(getUserInfoQueryKey(variables))
}

export const useGetUserInfoQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetUserInfoRequestType
  options?: Omit<UseQueryOptions<GetUserInfoResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetUserInfoResponseType>(
    getUserInfoQueryKey(variables),
    () => getUserInfo(variables, axiosConfig),
    options
  )
}
