import styled from '@emotion/styled'
import { FormEvent, FormHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import {
  FieldValues,
  FormProvider,
  FormState,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'

type FormProps<TFieldValues extends FieldValues> = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onChange' | 'onSubmit'
> & {
  id?: string
  className?: string
  children?: ReactNode | ((_formMethods: UseFormReturn<TFieldValues>) => ReactNode)
  formControlMethods?: UseFormReturn<TFieldValues>
  formOptions?: UseFormProps<TFieldValues>
  onChange?: (_event: FormEvent<HTMLFormElement>, _state: FormState<TFieldValues>) => void
  onSubmit?: SubmitHandler<TFieldValues>
}

export const Form = <TFieldValues extends FieldValues>({
  id,
  className,
  formControlMethods,
  children,
  formOptions,
  onChange,
  onSubmit,
  ...props
}: PropsWithChildren<FormProps<TFieldValues>>) => {
  const hookFormMethods = useForm<TFieldValues>(formOptions)
  const methods = formControlMethods ?? hookFormMethods

  return (
    <FormProvider {...methods}>
      <StyledForm
        id={id}
        className={className}
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          return onSubmit ? methods.handleSubmit(onSubmit)(e) : undefined
        }}
        onChange={(e) => onChange?.(e, methods.formState)}
        noValidate={true}
        {...props}
      >
        {typeof children === 'function' ? children(methods) : children}
      </StyledForm>
    </FormProvider>
  )
}

const StyledForm = styled.form`
  width: 100%;
`
