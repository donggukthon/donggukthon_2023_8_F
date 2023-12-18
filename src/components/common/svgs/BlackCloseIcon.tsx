import * as React from 'react'
import { SVGProps } from 'react'

const SvgBlackCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 6.63232L19 19.6323" stroke="black" strokeWidth={2} />
    <path d="M6 19.6323L19 6.63232" stroke="black" strokeWidth={2} />
  </svg>
)

export default SvgBlackCloseIcon
