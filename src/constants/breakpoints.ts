export const MOBILE_HURDLE = 780

export const BREAKPOINTS = [`${MOBILE_HURDLE}px`]
export const BREAKPOINTS_NAME = ['mobile', 'desktop'] as const

export const DEVICE_MEDIA = {
  MOBILE: `(max-width: ${MOBILE_HURDLE}px)`,
  DESKTOP: `(min-width: ${MOBILE_HURDLE + 1}px)`,
} as const
