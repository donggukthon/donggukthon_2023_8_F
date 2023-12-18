import { StaticImageData } from 'next/image'
import { useState } from 'react'

export const useFallbackImage = (originalImage: StaticImageData | string, fallbackImage: StaticImageData | string) => {
  const [image, setImage] = useState(originalImage)
  const fallback = () => setImage(fallbackImage)

  return { image, fallback }
}
