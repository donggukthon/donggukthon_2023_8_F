import { usePrevious } from '@hooks/usePrevious'
import { forceNumberOnlyOnKeyPress } from '@utils/forceNumberOnlyOnKeyPress'
import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormTextField, FormTextFieldProps } from '../FormTextField'

type FormCreditCardNumberFieldProps = Omit<FormTextFieldProps, 'autoFocusNext'> & {
  className?: string
  autoFocusNextName?: string
}

export const FormCreditCardNumberField: FC<FormCreditCardNumberFieldProps> = ({
  name,
  rules,
  autoFocusNextName,
  ...props
}) => {
  const { watch, setValue } = useFormContext()
  const ccn = watch(name)
  const prevCCN = usePrevious(ccn)

  useEffect(() => {
    if (prevCCN && ccn.length < prevCCN.length) {
      setValue(name, ccn.trim())
      return
    }

    if (ccn && ccn.length % 5 === 0) {
      setValue(name, `${ccn.slice(0, ccn.length - 1)} ${ccn.slice(ccn.length - 1)}`)
      return
    }
  }, [ccn, name, prevCCN, setValue])

  return (
    <FormTextField
      name={name}
      type="text"
      maxLength={19}
      inputMode="numeric"
      rules={{ maxLength: 19, minLength: 15, ...(rules ?? {}) }}
      autoFocusNext={autoFocusNextName ? { hurdle: 19, next: autoFocusNextName } : undefined}
      onKeyPress={forceNumberOnlyOnKeyPress}
      {...props}
    />
  )
}
