import * as React from 'react'
import { SVGProps } from 'react'

const SvgDefaultSelectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 8L10 12L6 8" stroke="#484F54" />
  </svg>
)

export default SvgDefaultSelectIcon
