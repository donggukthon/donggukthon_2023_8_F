import styled from '@emotion/styled'
import { ForwardStyle, ForwardStyleProps } from '../ForwardStyle/ForwardStyle'
import cx from 'classnames'
import styles from './style.module.scss'
import React from 'react'
import { BaseProps } from '../core/base'

type DisplayOn = 'desktop' | 'mobile'

export type DisplayProps = Omit<BaseProps, 'as' | 'ref'> &
  Pick<ForwardStyleProps, 'children'> & {
    on: DisplayOn | DisplayOn[]
  }

export const Display = styled(({ on, className, ...props }: DisplayProps) => {
  const onList = typeof on === 'string' ? [on] : on

  return (
    <ForwardStyle
      className={cx(className, {
        [styles.mobile]: onList.includes('mobile'),
        [styles.desktop]: onList.includes('desktop'),
      })}
      {...props}
    />
  )
})()
