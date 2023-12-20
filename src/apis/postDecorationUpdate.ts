import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostDecorationUpdateRequestType = {
  metadata: string
}

export type PostDecorationUpdateResponseType = {} & StatusType

const postDecorationUpdateMutationPath = (_param: PostDecorationUpdateRequestType) => `/decoration/update`

const postDecorationUpdate = (params: PostDecorationUpdateRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostDecorationUpdateRequestType, PostDecorationUpdateResponseType>(
    postDecorationUpdateMutationPath(params),
    params,
    config
  )
}

export const usePostDecorationUpdateMutation = (
  options?: Omit<
    UseMutationOptions<PostDecorationUpdateResponseType, unknown, PostDecorationUpdateRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostDecorationUpdateResponseType, unknown, PostDecorationUpdateRequestType>(
    (variables) => postDecorationUpdate(variables, axiosConfig),
    options
  )
}
