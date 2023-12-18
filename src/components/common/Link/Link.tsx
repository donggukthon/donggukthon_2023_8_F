import cx from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes, PropsWithChildren, forwardRef } from 'react'
import styles from './style.module.scss'

type LinkProps = Omit<NextLinkProps, 'passHref'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    className?: string
    type?: 'anchor' | 'button' | 'box'
    full?: boolean
  }

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  ({ className, children, type = 'anchor', onClick, target, full = false, ...props }, ref) => {
    return (
      <NextLink
        {...props}
        ref={ref}
        target={target ?? '_self'}
        onClick={onClick}
        className={cx(className, styles.link, styles[type], { [styles.full]: full })}
      >
        {children}
      </NextLink>
    )
  }
)
