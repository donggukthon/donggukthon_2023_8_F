import { camelizeKey } from '@utils/camelizeKey'
import { decamelizeKey } from '@utils/decamelizeKey'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import { requestUrl } from './url'

export const baseURL = requestUrl
const ACCESS_TOKEN_KEY = 'local-token'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})

axiosInstance.interceptors.request.use((config) => {
  const newConfig = { ...config }

  if (newConfig.params) {
    newConfig.params = decamelizeKey(newConfig.params)
  }
  if (newConfig.data) {
    newConfig.data = decamelizeKey(newConfig.data)
  }

  return newConfig
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.headers['content-type'].includes('application/json')) {
      response.data = camelizeKey(response.data)
    }
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  }
)

axiosInstance.defaults.paramsSerializer = (params: any) => qs.stringify(params, { arrayFormat: 'repeat' })

export const axiosGET = <RequestData, ResponseData>(
  url: string,
  params?: RequestData,
  options?: AxiosRequestConfig
) => {
  try {
    const storageAccessToken = JSON.parse(window.localStorage.getItem(ACCESS_TOKEN_KEY) as string)
    const washedAccessToken = storageAccessToken ? `Bearer ${storageAccessToken}` : undefined

    return axiosInstance
      .get<ResponseData, AxiosResponse<ResponseData>, RequestData>(url, {
        params,
        ...options,
        headers: { Authorization: washedAccessToken },
      })
      .then((response) => response.data)
  } catch {
    return axiosInstance
      .get<ResponseData, AxiosResponse<ResponseData>, RequestData>(url, {
        params,
        ...options,
      })
      .then((response) => response.data)
  }
}

export const axiosPOST = <RequestData, ResponseData>(url: string, data?: RequestData, options?: AxiosRequestConfig) => {
  try {
    const storageAccessToken = JSON.parse(window.localStorage.getItem(ACCESS_TOKEN_KEY) as string)
    const washedAccessToken = storageAccessToken ? `Bearer ${storageAccessToken}` : undefined
    return axiosInstance
      .post<ResponseData, AxiosResponse<ResponseData>>(
        url,
        { ...data },
        {
          headers: {
            Authorization: washedAccessToken,
          },
          ...options,
        }
      )
      .then((response) => {
        return response.data
      })
  } catch {
    return axiosInstance
      .post<ResponseData, AxiosResponse<ResponseData>>(
        url,
        { ...data },
        {
          headers: {},
          ...options,
        }
      )
      .then((response) => {
        return response.data
      })
  }
}

export const axiosFormPOST = <RequestData, ResponseData>(
  url: string,
  data?: RequestData,
  options?: AxiosRequestConfig
) => {
  try {
    const storageAccessToken = JSON.parse(window.localStorage.getItem(ACCESS_TOKEN_KEY) as string)
    const washedAccessToken = storageAccessToken ? `Bearer ${storageAccessToken}` : undefined
    return axiosInstance
      .postForm<ResponseData, AxiosResponse<ResponseData>>(url, data, {
        headers: {
          Authorization: washedAccessToken,
        },
        ...options,
      })
      .then((response) => {
        return response.data
      })
  } catch {
    return axiosInstance
      .postForm<ResponseData, AxiosResponse<ResponseData>>(url, data, {
        headers: {},
        ...options,
      })
      .then((response) => {
        return response.data
      })
  }
}
