import * as React from 'react'
import { SVGProps } from 'react'

const SvgMainSeeMoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={20} cy={20} r={20} fill="black" />
    <path
      d="M29.7611 20.5303C30.054 20.2374 30.054 19.7626 29.7611 19.4697L24.9881 14.6967C24.6952 14.4038 24.2204 14.4038 23.9275 14.6967C23.6346 14.9896 23.6346 15.4645 23.9275 15.7574L28.1701 20L23.9275 24.2426C23.6346 24.5355 23.6346 25.0104 23.9275 25.3033C24.2204 25.5962 24.6952 25.5962 24.9881 25.3033L29.7611 20.5303ZM10.7692 20.75H29.2308V19.25H10.7692V20.75Z"
      fill="white"
    />
  </svg>
)

export default SvgMainSeeMoreIcon
