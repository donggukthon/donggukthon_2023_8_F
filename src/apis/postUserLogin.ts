import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostUserLoginRequestType = {
  email: string
  password: string
}

export type PostUserLoginResponseType = {
  data: {
    token: string
  }
} & StatusType

const postUserLoginMutationPath = (_param: PostUserLoginRequestType) => `/user/login.php`

const postUserLogin = (params: PostUserLoginRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostUserLoginRequestType, PostUserLoginResponseType>(
    postUserLoginMutationPath(params),
    params,
    config
  )
}

export const usePostUserLoginMutation = (
  options?: Omit<
    UseMutationOptions<PostUserLoginResponseType, unknown, PostUserLoginRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostUserLoginResponseType, unknown, PostUserLoginRequestType>(
    (variables) => postUserLogin(variables, axiosConfig),
    options
  )
}
