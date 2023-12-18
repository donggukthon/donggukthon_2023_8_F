import * as React from 'react'
import { SVGProps } from 'react'

const SvgGoToIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.5 3.5C17.5 2.94772 17.0523 2.5 16.5 2.5L7.50002 2.5C6.94774 2.49999 6.50002 2.94771 6.50002 3.49999C6.50002 4.05228 6.94774 4.49999 7.50002 4.5L15.5 4.5L15.5 12.5C15.5 13.0523 15.9477 13.5 16.5 13.5C17.0523 13.5 17.5 13.0523 17.5 12.5L17.5 3.5ZM4.20711 17.2071L17.2071 4.20711L15.7929 2.79289L2.7929 15.7929L4.20711 17.2071Z"
      fill="black"
    />
  </svg>
)

export default SvgGoToIcon
