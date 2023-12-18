import { KeyboardEventHandler } from 'react'

export const forceNumberOnlyOnKeyPress: KeyboardEventHandler<HTMLInputElement> = (event) => {
  if (event.key >= '0' && event.key <= '9') {
    return
  }

  event.preventDefault()
}
