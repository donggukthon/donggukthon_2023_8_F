import * as React from 'react'
import { SVGProps } from 'react'

const SvgHamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width={20} height={2} />
    <rect y={7} width={20} height={2} />
    <rect y={14} width={20} height={2} />
  </svg>
)

export default SvgHamburgerIcon
