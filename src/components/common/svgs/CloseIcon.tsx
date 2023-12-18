import * as React from 'react'
import { SVGProps } from 'react'

const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      x={4.38696}
      y={5.06201}
      width={1.06827}
      height={21.3655}
      transform="rotate(-45 4.38696 5.06201)"
      fill="#495057"
    />
    <rect
      x={4.38696}
      y={19.6294}
      width={21.3655}
      height={1.06827}
      transform="rotate(-45 4.38696 19.6294)"
      fill="#495057"
    />
  </svg>
)

export default SvgCloseIcon
