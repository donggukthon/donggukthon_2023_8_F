import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostUserPasswordResetRequestType = {
  email: string
}

export type PostUserPasswordResetResponseType = {} & StatusType

const postUserPasswordResetMutationPath = (_param: PostUserPasswordResetRequestType) => `/user/password-reset.php`

const postUserPasswordReset = (params: PostUserPasswordResetRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostUserPasswordResetRequestType, PostUserPasswordResetResponseType>(
    postUserPasswordResetMutationPath(params),
    params,
    config
  )
}

export const usePostUserPasswordResetMutation = (
  options?: Omit<
    UseMutationOptions<PostUserPasswordResetResponseType, unknown, PostUserPasswordResetRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostUserPasswordResetResponseType, unknown, PostUserPasswordResetRequestType>(
    (variables) => postUserPasswordReset(variables, axiosConfig),
    options
  )
}
