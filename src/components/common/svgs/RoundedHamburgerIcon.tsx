import * as React from 'react'
import { SVGProps } from 'react'

const SvgRoundedHamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2.5 8H13.5" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 4H13.5" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 12H13.5" stroke="white" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default SvgRoundedHamburgerIcon
