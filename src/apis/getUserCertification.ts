import { axiosGET } from '@apis/base'
import { generateQueryKey } from '@utils/generateQueryKey'
import { AxiosRequestConfig } from 'axios'
import { QueryClient, useQuery, UseQueryOptions } from 'react-query'
import { MemberItemType, SubmissionItemType } from 'types/common'
import { StatusType } from 'types/status'

export type GetUserCertificationRequestType = {}

export type GetUserCertificationResponseType = {
  data: {
    member: MemberItemType
    submission: SubmissionItemType
  }
} & StatusType

const getUserCertificationQueryPath = (_param: GetUserCertificationRequestType) => `/user/certification.php`

const getUserCertification = (params: GetUserCertificationRequestType, config?: AxiosRequestConfig) => {
  return axiosGET<GetUserCertificationRequestType, GetUserCertificationResponseType>(
    getUserCertificationQueryPath(params),
    params,
    config
  )
}

export const getUserCertificationQueryKey = (params: GetUserCertificationRequestType) =>
  `${getUserCertificationQueryPath(params)}?${generateQueryKey(params)}`

export const prefetchGetUserCertificationQuery = async (
  queryClient: QueryClient,
  variables: GetUserCertificationRequestType
) => {
  await queryClient.prefetchQuery(getUserCertificationQueryKey(variables), () => getUserCertification(variables))

  return queryClient.getQueryState<GetUserCertificationResponseType>(getUserCertificationQueryKey(variables))
}

export const useGetUserCertificationQuery = ({
  variables,
  options,
  axiosConfig,
}: {
  variables: GetUserCertificationRequestType
  options?: Omit<UseQueryOptions<GetUserCertificationResponseType>, 'queryKey' | 'queryFn'>
  axiosConfig?: AxiosRequestConfig
}) => {
  return useQuery<GetUserCertificationResponseType>(
    getUserCertificationQueryKey(variables),
    () => getUserCertification(variables, axiosConfig),
    options
  )
}
