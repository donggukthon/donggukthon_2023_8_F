import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { toastPropsAtom } from './Toast'

type ToastContentProps = {
  message: string
  type: 'success' | 'alarm' | 'fail' | 'none'
  closeable?: boolean
}

export const useToast = () => {
  const [_, setToastProps] = useAtom(toastPropsAtom)

  return useMemo(
    () => ({
      showSuccessToast: (options: Omit<ToastContentProps, 'type'>) => setToastProps({ type: 'success', ...options }),
      showAlarmToast: (options: Omit<ToastContentProps, 'type'>) => setToastProps({ type: 'alarm', ...options }),
      showFailToast: (options: Omit<ToastContentProps, 'type'>) => setToastProps({ type: 'fail', ...options }),
    }),
    [setToastProps]
  )
}
