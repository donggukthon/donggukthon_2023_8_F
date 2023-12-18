import { forwardRef } from 'react'
import { ContainedButton, ContainedButtonProps } from '../ContainedButton'

type CapsuleButtonProps = Omit<ContainedButtonProps, 'round' | 'full'>

export const CapsuleButton = forwardRef<HTMLElement, CapsuleButtonProps>((props, ref) => (
  <ContainedButton ref={ref} round={true} full={false} {...props} />
))
