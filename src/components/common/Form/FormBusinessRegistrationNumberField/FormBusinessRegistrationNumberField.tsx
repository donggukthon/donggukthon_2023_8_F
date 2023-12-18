import { usePrevious } from '@hooks/usePrevious'
import { forceNumberOnlyOnKeyPress } from '@utils/forceNumberOnlyOnKeyPress'
import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormTextField, FormTextFieldProps } from '../FormTextField'

type FormBusinessRegistrationNumberFieldProps = Omit<FormTextFieldProps, 'autoFocusNext'> & {
  className?: string
  autoFocusNextName?: string
}

export const FormBusinessRegistrationNumberField: FC<FormBusinessRegistrationNumberFieldProps> = ({
  name,
  rules,
  autoFocusNextName,
  ...props
}) => {
  const { watch, setValue } = useFormContext()
  const licenseNumber = watch(name)
  const prevLicenseNumber = usePrevious(licenseNumber)

  useEffect(() => {
    if (prevLicenseNumber && licenseNumber.length < prevLicenseNumber.length) {
      setValue(name, licenseNumber.trim())
      return
    }

    if (licenseNumber && (licenseNumber.length === 4 || licenseNumber.length === 7)) {
      setValue(
        name,
        `${licenseNumber.slice(0, licenseNumber.length - 1)} ${licenseNumber.slice(licenseNumber.length - 1)}`
      )
      return
    }
  }, [licenseNumber, name, prevLicenseNumber, setValue])

  return (
    <FormTextField
      name={name}
      type="text"
      maxLength={12}
      rules={{ maxLength: 12, minLength: 12, ...(rules ?? {}) }}
      autoFocusNext={autoFocusNextName ? { hurdle: 12, next: autoFocusNextName } : undefined}
      inputMode="numeric"
      onKeyPress={forceNumberOnlyOnKeyPress}
      {...props}
    />
  )
}
