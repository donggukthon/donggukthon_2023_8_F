import { axiosGET } from '@apis/base'
import { generateQueryKey } from '@utils/generateQueryKey'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { MemberItemType, SubmissionItemType } from 'types/common'
import { StatusType } from 'types/status'

export type GetHallListRequestType = {}

export type GetHallListResponseType = {
  data: {
    member: MemberItemType
    submission: SubmissionItemType
  }[]
} & StatusType

const getHallListQueryPath = (_param: GetHallListRequestType) => `/hall/list.php`

const getHallList = (params: GetHallListRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetHallListRequestType, GetHallListResponseType>(getHallListQueryPath(params), params, config)
}

export const getHallListQueryKey = (params: GetHallListRequestType) =>
  `${getHallListQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetHallListQuery = async (queryClient: QueryClient, variables: GetHallListRequestType) => {
  await queryClient.prefetchQuery(getHallListQueryKey(variables), () => getHallList(variables))

  return queryClient.getQueryState<GetHallListResponseType>(getHallListQueryKey(variables))
}

export const useGetHallListQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetHallListRequestType
  options?: Omit<UseQueryOptions<GetHallListResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetHallListResponseType>(
    getHallListQueryKey(variables),
    () => getHallList(variables, axiosConfig),
    options
  )
}
