import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { Image } from '@components/common/Image'
import { useFallbackImage } from '@hooks/useFallbackImage'
import { StaticImageData } from 'next/image'
import { Circle } from '../Circle'
import { CircleProps } from '../Circle/Circle'

type AvatarProps = CircleProps & {
  src: string | StaticImageData
  alt: string
  fallback?: string | StaticImageData
}

export const Avatar = styled(
  forwardRef<HTMLElement, AvatarProps>(({ src, fallback: fallbackProp, size, alt, bgColor, ...props }, ref) => {
    const { image, fallback } = useFallbackImage(src, fallbackProp ?? '')
    const imageLoadSize = Array.isArray(size) ? size.map((s) => s * 2) : size * 2

    return (
      <Circle ref={ref} size={size} bgColor={bgColor} {...props}>
        <Image width={imageLoadSize} height={imageLoadSize} src={image} onError={fallback} alt={alt} />
      </Circle>
    )
  })
)`
  border-radius: 50%;
  overflow: hidden;
  z-index: 0;
`
