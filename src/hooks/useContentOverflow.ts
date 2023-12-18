import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

/**
 * @description
 * `contentRef`에 해당하는 엘리먼트의 내용이 부모 요소(높이가 고정된)의 높이를 넘었는지 판단하는 훅입니다.
 * 내부 컨텐츠의 높이를 예측할 수 없는 상황에서 유용하게 사용할 수 있습니다.
 */
export const useContentOverflow = <T extends HTMLElement>() => {
  const contentRef = useRef<T>(null)
  const { query } = useRouter()
  const [isOverflown, setIsOverflown] = useState(false)

  const setRef = (ref: T) => {
    if (!ref) {
      return
    }

    setIsOverflown(ref.clientHeight < ref.scrollHeight || ref.clientWidth < ref.scrollWidth)
  }

  useEffect(() => {
    if (!contentRef.current) {
      return
    }

    setIsOverflown(
      contentRef.current.clientHeight < contentRef.current.scrollHeight ||
        contentRef.current.clientWidth < contentRef.current.scrollWidth
    )
  }, [query])

  return { ref: contentRef, isOverflown, setRef }
}
