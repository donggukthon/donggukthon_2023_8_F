import * as React from 'react'
import { SVGProps } from 'react'

const SvgSwiperArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={32} height={32} transform="matrix(-1 0 0 1 32 0)" fill="white" fillOpacity={0.2} />
    <path d="M21 23.65L13.583 16L21 8.35L18.7166 6L9 16L18.7166 26L21 23.65Z" fill="#646A70" />
  </svg>
)

export default SvgSwiperArrowIcon
