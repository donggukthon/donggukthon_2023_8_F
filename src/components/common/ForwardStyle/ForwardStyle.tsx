import styled from '@emotion/styled'
import { cloneElement, forwardRef, isValidElement, ReactElement } from 'react'
import { BoxProps } from '../Box'
import { boxStyleFn } from '../Box/Box'
import shouldForwardProp from '@styled-system/should-forward-prop'

export type ForwardStyleProps = BoxProps & {
  children?: ReactElement
}

export const ForwardStyle = styled(
  forwardRef<HTMLElement, ForwardStyleProps>(({ children, className, ...props }, ref) => {
    if (!isValidElement(children)) {
      throw new Error('`ForwardStyle`을 적용할 수 없는 컴포넌트입니다.')
    }

    return cloneElement(children as ReactElement, {
      ...(ref ? { ref } : {}),
      ...props,
      className: [children.props.className ?? '', className].join(' ').trim(),
    })
  }),
  { shouldForwardProp }
)(boxStyleFn)
