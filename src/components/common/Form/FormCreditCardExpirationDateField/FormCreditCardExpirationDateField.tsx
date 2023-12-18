import { usePrevious } from '@hooks/usePrevious'
import { forceNumberOnlyOnKeyPress } from '@utils/forceNumberOnlyOnKeyPress'
import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormTextField, FormTextFieldProps } from '../FormTextField'

type FormCreditCardExpirationDateFieldProps = Omit<FormTextFieldProps, 'autoFocusNext'> & {
  className?: string
  autoFocusNextName?: string
}

export const FormCreditCardExpirationDateField: FC<FormCreditCardExpirationDateFieldProps> = ({
  name,
  rules,
  autoFocusNextName,
  ...props
}) => {
  const { watch, setValue } = useFormContext()
  const expiredAt = watch(name)
  const prevExpiredAt = usePrevious(expiredAt)

  useEffect(() => {
    if (prevExpiredAt && expiredAt.length < prevExpiredAt.length) {
      setValue(name, expiredAt.replace('/', ''))
      return
    }

    if (expiredAt && expiredAt.length === 3) {
      setValue(name, `${expiredAt.slice(0, expiredAt.length - 1)}/${expiredAt.slice(expiredAt.length - 1)}`)
      return
    }
  }, [expiredAt, name, prevExpiredAt, setValue])

  return (
    <FormTextField
      name={name}
      type="tel"
      maxLength={5}
      inputMode="numeric"
      rules={{ maxLength: 5, minLength: 5, ...(rules ?? {}) }}
      autoFocusNext={autoFocusNextName ? { hurdle: 5, next: autoFocusNextName } : undefined}
      onKeyPress={forceNumberOnlyOnKeyPress}
      {...props}
    />
  )
}
