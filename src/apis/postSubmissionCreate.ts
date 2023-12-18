import { axiosPOST } from '@apis/base'
import { AxiosRequestConfig } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { StatusType } from 'types/status'

export type PostSubmissionCreateRequestType = {
  amount: number
  cardMessage: string
  sendEmail?: string
  sendMessage?: string
}

export type PostSubmissionCreateResponseType = {} & StatusType

const postSubmissionCreateMutationPath = (_param: PostSubmissionCreateRequestType) => `/submission/create.php`

const postSubmissionCreate = (params: PostSubmissionCreateRequestType, config?: AxiosRequestConfig) => {
  return axiosPOST<PostSubmissionCreateRequestType, PostSubmissionCreateResponseType>(
    postSubmissionCreateMutationPath(params),
    params,
    config
  )
}

export const usePostSubmissionCreateMutation = (
  options?: Omit<
    UseMutationOptions<PostSubmissionCreateResponseType, unknown, PostSubmissionCreateRequestType>,
    'mutationKey' | 'mutationFn'
  >,
  axiosConfig?: AxiosRequestConfig
) => {
  return useMutation<PostSubmissionCreateResponseType, unknown, PostSubmissionCreateRequestType>(
    (variables) => postSubmissionCreate(variables, axiosConfig),
    options
  )
}
