import * as React from 'react'
import { SVGProps } from 'react'

const SvgEmptyProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={9} cy={9} r={9} fill="#DEE2E6" />
    <path
      d="M9 9C10.3812 9 11.5 7.88125 11.5 6.5C11.5 5.11875 10.3812 4 9 4C7.61875 4 6.5 5.11875 6.5 6.5C6.5 7.88125 7.61875 9 9 9ZM9 10.25C7.33125 10.25 4 11.0875 4 12.75V14H14V12.75C14 11.0875 10.6687 10.25 9 10.25Z"
      fill="#F8F9FA"
    />
  </svg>
)

export default SvgEmptyProfileIcon
