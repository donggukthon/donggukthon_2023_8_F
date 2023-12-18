import { isBrowser } from './browser'

export const trackClickOutside = (selector: string, callback: () => void) => {
  if (!isBrowser) {
    return new Error('trackClickOutside는 브라우저에서만 사용할 수 있습니다.')
  }

  const callbackFn = (event: MouseEvent) => {
    const istargetInside = Boolean((event.target as Element)?.closest(selector))

    if (!istargetInside) {
      callback()
      window.removeEventListener('click', callbackFn)
    }
  }

  window.addEventListener('click', callbackFn)
}
