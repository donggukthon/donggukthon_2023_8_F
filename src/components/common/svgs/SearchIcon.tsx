import * as React from 'react'
import { SVGProps } from 'react'

const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16.8337 15.1663L16 14.3326L14.3326 16L15.1663 16.8337L16.8337 15.1663ZM19.6663 21.3337L20.5 22.1674L22.1674 20.5L21.3337 19.6663L19.6663 21.3337ZM15.1663 16.8337L19.6663 21.3337L21.3337 19.6663L16.8337 15.1663L15.1663 16.8337Z"
      fill="#00A293"
    />
    <circle cx={11.5} cy={11.5} r={6.32094} stroke="#00A293" strokeWidth={2.35812} />
  </svg>
)

export default SvgSearchIcon
