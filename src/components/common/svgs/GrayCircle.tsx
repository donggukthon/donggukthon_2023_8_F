import * as React from 'react'
import { SVGProps } from 'react'

const SvgGrayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={3} cy={3} r={3} fill="#D9D9D9" />
  </svg>
)

export default SvgGrayCircle
