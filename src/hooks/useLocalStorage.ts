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

export function useLocalStorage<T>(key: string): Storage<T>
export function useLocalStorage<T>(key: string, initialValue: T): StorageWithInitialValue<T>
export function useLocalStorage<T>(key: string, initialValue?: T) {
  const storageKey = `local-${key}`
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
    const value = window.localStorage.getItem(storageKey)
    if (value) {
      setValue(JSON.parse(value))
    }
  }, [storageKey])

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
        window.localStorage.setItem(storageKey, JSON.stringify(newValue))
        window.dispatchEvent(new StorageEvent('storage', { key: storageKey, newValue: JSON.stringify(newValue) }))
      }
    },
    [storageKey]
  )

  const removeItem = useCallback(() => {
    setValue(initialValue)

    if (isBrowser) {
      window.localStorage.removeItem(storageKey)
      window.dispatchEvent(new StorageEvent('storage', { key: storageKey, newValue: undefined }))
    }
  }, [initialValue, storageKey])

  return {
    value,
    setItem,
    removeItem,
  }
}
