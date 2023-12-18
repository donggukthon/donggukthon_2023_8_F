import { useCallback, useRef, useState } from 'react'

type UseControlledStateProps = {
  controlled?: any
  default?: any
}

export const useControlledState = ({ controlled, default: defaultProp }: UseControlledStateProps) => {
  const { current: isControlled } = useRef(controlled !== undefined)
  const [valueState, setValueState] = useState(defaultProp)
  const value = isControlled ? controlled : valueState

  const setValueIfUncontrolled = useCallback(
    (newValue: any) => {
      if (!isControlled) {
        setValueState(newValue)
      }
    },
    [isControlled]
  )

  return [value, setValueIfUncontrolled]
}
