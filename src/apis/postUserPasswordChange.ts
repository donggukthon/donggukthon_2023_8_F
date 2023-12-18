import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostUserPasswordChangeRequestType = {
  password: string
}

export type PostUserPasswordChangeResponseType = {} & StatusType

const postUserPasswordChangeMutationPath = (_param: PostUserPasswordChangeRequestType) => `/user/password-change.php`

const postUserPasswordChange = (params: PostUserPasswordChangeRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostUserPasswordChangeRequestType, PostUserPasswordChangeResponseType>(
    postUserPasswordChangeMutationPath(params),
    params,
    config
  )
}

export const usePostUserPasswordChangeMutation = (
  options?: Omit<
    UseMutationOptions<PostUserPasswordChangeResponseType, unknown, PostUserPasswordChangeRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostUserPasswordChangeResponseType, unknown, PostUserPasswordChangeRequestType>(
    (variables) => postUserPasswordChange(variables, axiosConfig),
    options
  )
}
