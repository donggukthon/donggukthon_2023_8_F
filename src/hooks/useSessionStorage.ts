/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-redeclare */
import { isBrowser } from '@utils/browser'
import { useCallback, useEffect, useState } from 'react'

type Storage<T> = {
  value: T | undefined
  setItem: (item: T) => void
  removeItem: () => void
}

type StorageWithInitialValue<T> = {
  value: T
  setItem: (item: T) => void
  removeItem: () => void
}

export function useSessionStorage<T>(key: string): Storage<T>
export function useSessionStorage<T>(key: string, initialValue: T): StorageWithInitialValue<T>
export function useSessionStorage<T>(key: string, initialValue?: T) {
  const storageKey = `session-${key}`
  const [value, setValue] = useState(initialValue)

  const changeValue = useCallback(
    (event: StorageEvent) => {
      if (storageKey === event.key) {
        setValue(event.newValue ? JSON.parse(event.newValue) : initialValue)
      }
    },
    [initialValue, storageKey]
  )

  useEffect(() => {
    window.addEventListener('storage', changeValue)

    return () => {
      window.removeEventListener('storage', changeValue)
    }
  })

  const setItem = useCallback(
    (newValue: T) => {
      setValue(newValue)

      if (isBrowser) {
        window.sessionStorage.setItem(storageKey, JSON.stringify(newValue))
        window.dispatchEvent(new StorageEvent('storage', { key: storageKey, newValue: JSON.stringify(newValue) }))
      }
    },
    [storageKey]
  )

  const removeItem = useCallback(() => {
    setValue(initialValue)

    if (isBrowser) {
      window.sessionStorage.removeItem(storageKey)
      window.dispatchEvent(new StorageEvent('storage', { key: storageKey, newValue: undefined }))
    }
  }, [initialValue, storageKey])

  return {
    value,
    setItem,
    removeItem,
  }
}
