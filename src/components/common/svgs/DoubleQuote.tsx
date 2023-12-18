import * as React from 'react'
import { SVGProps } from 'react'

const SvgDoubleQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={14}
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="double-quote"
    {...props}
  >
    <path
      d="M7.3372 7.90765V14H0V9.1828C0 6.57938 0.409739 4.69323 1.21969 3.53321C2.28692 1.9747 3.96399 0.796964 6.2795 0L7.95657 2.04554C6.55583 2.4883 5.52672 3.15244 4.86923 4.03795C4.21174 4.92347 3.84012 6.20746 3.76389 7.8988H7.3372V7.90765Z"
      fill="#89898E"
    />
    <path
      d="M17.3902 7.90765V14H10.053V9.1828C10.053 6.57938 10.4627 4.69323 11.2727 3.52435C12.3304 1.9747 14.017 0.796964 16.3229 0L18 2.04554C16.6088 2.49715 15.5797 3.16129 14.9222 4.04681C14.2647 4.93232 13.8931 6.21632 13.8169 7.90765H17.3902Z"
      fill="#89898E"
    />
  </svg>
)

export default SvgDoubleQuote
