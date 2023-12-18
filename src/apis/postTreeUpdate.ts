import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostTreeUpdateRequestType = {
  decorationList: {
    id?: number
    decorationId: number
    location: string
    scale: number
  }[]
}

export type PostTreeUpdateResponseType = {} & StatusType

const postTreeUpdateMutationPath = (_param: PostTreeUpdateRequestType) => `/tree/update.php`

const postTreeUpdate = (params: PostTreeUpdateRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostTreeUpdateRequestType, PostTreeUpdateResponseType>(
    postTreeUpdateMutationPath(params),
    params,
    config
  )
}

export const usePostTreeUpdateMutation = (
  options?: Omit<
    UseMutationOptions<PostTreeUpdateResponseType, unknown, PostTreeUpdateRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostTreeUpdateResponseType, unknown, PostTreeUpdateRequestType>(
    (variables) => postTreeUpdate(variables, axiosConfig),
    options
  )
}
