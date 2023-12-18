import { FC } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { ResponsiveValue } from 'types/ResponsiveValue'
import { getPaddedResponsiveArray } from '@utils/getPaddedResponsiveArray'
import { BREAKPOINTS_NAME } from '@constants/breakpoints'

type Ratio = '16:9' | '4:3' | '2:1' | '1:1' | '1:2' | '3:4' | '9:16'

type ImageProps = Omit<NextImageProps, 'width' | 'height' | 'alt'> & {
  ratio?: ResponsiveValue<Ratio>
  src: ResponsiveValue<NextImageProps['src']>
  width: ResponsiveValue<number>
  height: ResponsiveValue<number>
  alt: string
  background?: boolean
}

export const Image: FC<ImageProps> = ({ className, ratio, src, width, height, background, ...restProps }) => {
  const ratioArray = ratio ? getPaddedResponsiveArray(ratio) : []
  const imageSourceArray = getPaddedResponsiveArray(src)
  const widthArray = getPaddedResponsiveArray(width)
  const heightArray = getPaddedResponsiveArray(height)

  if (!imageSourceArray.reduce((prev, cur) => prev && Boolean(cur), true)) {
    return null
  }

  return (
    <>
      {BREAKPOINTS_NAME.map((breakpointName, index) =>
        ratioArray.length ? (
          <div
            className={cx(
              className,
              styles['custom-image'],
              styles.ratio,
              styles[`ratio-${ratioArray[index].replace(':', '-')}`],
              breakpointName
            )}
            key={breakpointName}
          >
            <div className={styles['img-wrap']}>
              <NextImage
                className={cx(styles['image'])}
                draggable={false}
                objectFit="cover"
                src={imageSourceArray[index]}
                width={widthArray[index]}
                height={heightArray[index]}
                {...restProps}
              />
            </div>
          </div>
        ) : (
          <div className={cx(className, breakpointName, styles['custom-image'])} key={breakpointName}>
            <NextImage
              className={cx(styles['image'], { [styles.transparent]: background === false })}
              draggable={false}
              objectFit="cover"
              src={imageSourceArray[index]}
              width={widthArray[index]}
              height={heightArray[index]}
              {...restProps}
            />
          </div>
        )
      )}
    </>
  )
}
