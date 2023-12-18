import * as React from 'react'
import { SVGProps } from 'react'

const SvgGreenCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={9} cy={9} r={7} fill="white" />
    <path
      d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM7.5 12.75L3.75 9L4.8075 7.9425L7.5 10.6275L13.1925 4.935L14.25 6L7.5 12.75Z"
      fill="#09AD97"
    />
  </svg>
)

export default SvgGreenCheckIcon
