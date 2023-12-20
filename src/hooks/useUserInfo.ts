import { useGetUserInfoQuery } from '@apis/getUserInfo'
import { MemberItemType } from 'types/common'

type useUserInfoType = {
  userInfo?: MemberItemType
  isLoadingGetUserInfo: boolean
  isFetchedGetUserInfo: boolean
  refetchGetUserInfo: () => void
}

export const useUserInfo = (): useUserInfoType => {
  const {
    data,
    isLoading: isLoadingGetUserInfo,
    isFetched: isFetchedGetUserInfo,
    refetch: refetchGetUserInfo,
    status,
  } = useGetUserInfoQuery({ variables: {} })

  const userInfoData = data?.data

  const _userInfo = status === 'success' ? userInfoData : undefined

  return { userInfo: _userInfo, isLoadingGetUserInfo, isFetchedGetUserInfo, refetchGetUserInfo }
}
