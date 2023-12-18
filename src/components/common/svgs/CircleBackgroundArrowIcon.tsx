import * as React from 'react'
import { SVGProps } from 'react'

const SvgCircleBackgroundArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10} cy={10} r={10} fill="white" />
    <path
      d="M14.9691 10.3536C15.1644 10.1583 15.1644 9.84171 14.9691 9.64645L11.7871 6.46447C11.5918 6.2692 11.2753 6.2692 11.08 6.46447C10.8847 6.65973 10.8847 6.97631 11.08 7.17157L13.9084 10L11.08 12.8284C10.8847 13.0237 10.8847 13.3403 11.08 13.5355C11.2753 13.7308 11.5918 13.7308 11.7871 13.5355L14.9691 10.3536ZM5.38477 10.5H14.6155V9.5H5.38477V10.5Z"
      fill="#484F54"
    />
  </svg>
)

export default SvgCircleBackgroundArrowIcon
