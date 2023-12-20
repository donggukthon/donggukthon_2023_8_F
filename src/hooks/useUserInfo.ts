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

  const userInfoData = data

  const _userInfo = status === 'success' ? userInfoData : undefined

  // const testInfo = {
  //   id: 2,
  //   name: '아마추어개발자',
  //   email: 'ghkdwogud852@gmail.com',
  //   createdAt: '2023-12-20T02:05:37',
  // }

  return { userInfo: _userInfo, isLoadingGetUserInfo, isFetchedGetUserInfo, refetchGetUserInfo }
}
