import * as React from 'react'
import { SVGProps } from 'react'

const SvgCircleArrowBottomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 17L20 25L29 17" stroke="#005A54" strokeWidth={2.5} strokeLinecap="round" />
    <circle cx={20} cy={20} r={18.75} stroke="#005A54" strokeWidth={2.5} />
  </svg>
)

export default SvgCircleArrowBottomIcon
