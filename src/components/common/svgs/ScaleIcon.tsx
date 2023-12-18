import * as React from 'react'
import { SVGProps } from 'react'

const SvgScaleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 2.5V13.5" stroke="#E8FAF7" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 13.5H9.5" stroke="#E8FAF7" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 5.5L12.5 3.5" stroke="#E8FAF7" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M0.833496 10.2941C0.833496 11.4004 2.0835 11.7941 2.8335 11.7941C3.5835 11.7941 4.8335 11.4004 4.8335 10.2941L2.8335 5.29413L0.833496 10.2941Z"
      fill="#E8FAF7"
    />
    <path
      d="M11.1665 8.29413C11.1665 9.40038 12.4165 9.79413 13.1665 9.79413C13.9165 9.79413 15.1665 9.40038 15.1665 8.29413L13.1665 3.29413L11.1665 8.29413Z"
      fill="#E8FAF7"
    />
  </svg>
)

export default SvgScaleIcon
