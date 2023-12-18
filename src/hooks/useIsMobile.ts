import { DEVICE_MEDIA } from '@constants/breakpoints'
import { useMediaQuery } from './useMediaQuery'

export const useIsMobile = (defaultValue = false) => {
  return useMediaQuery(DEVICE_MEDIA.MOBILE, defaultValue)
}
