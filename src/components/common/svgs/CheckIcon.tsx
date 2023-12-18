import * as React from 'react'
import { SVGProps } from 'react'

const SvgCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={10} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.6667 1.66668L4.00001 8.33334L1.33335 5.66668"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgCheckIcon
