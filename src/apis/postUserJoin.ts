import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostUserJoinRequestType = {
  email: string
  password: string
  name: string
}

export type PostUserJoinResponseType = {} & StatusType

const postUserJoinMutationPath = (_param: PostUserJoinRequestType) => `/member/join`

const postUserJoin = (params: PostUserJoinRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostUserJoinRequestType, PostUserJoinResponseType>(postUserJoinMutationPath(params), params, config)
}

export const usePostUserJoinMutation = (
  options?: Omit<
    UseMutationOptions<PostUserJoinResponseType, unknown, PostUserJoinRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostUserJoinResponseType, unknown, PostUserJoinRequestType>(
    (variables) => postUserJoin(variables, axiosConfig),
    options
  )
}
