import { cloneElement, ChangeEvent, FC, ReactElement } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { useControlledState } from '@hooks/useControlledState'
import DefaultSelectIcon from '../svgs/DefaultSelectIcon'

type SelectProps = {
  className?: string
  value?: string | number
  options: (string | number)[] | { [key: number | string]: number | string }
  placeholder?: string | number
  placeholderClassName?: string
  onChange?: (_e: ChangeEvent<HTMLSelectElement>) => void
  CustomIcon?: ReactElement<SVGSVGElement> | null
}

export const Select: FC<SelectProps> = ({
  className,
  value: valueProp,
  options,
  placeholder,
  placeholderClassName = styles.placeholder,
  onChange: onChangeProp,
  CustomIcon = <DefaultSelectIcon />,
}) => {
  const [value, setValueIfUncontrolled] = useControlledState({ controlled: valueProp, default: '' })

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValueIfUncontrolled(e.target.value)
    onChangeProp?.(e)
  }

  return (
    <div className={cx(styles['select-wrapper'])}>
      <select
        className={cx(className, styles['select'], {
          [styles['no-icon']]: !CustomIcon,
          [placeholderClassName]: value === '',
        })}
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option selected={true} disabled={true} value="">
            {placeholder}
          </option>
        )}
        {Array.isArray(options)
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : Object.entries(options).map(([optionValue, display]) => (
              <option key={optionValue} value={optionValue}>
                {display}
              </option>
            ))}
      </select>
      {CustomIcon &&
        cloneElement(CustomIcon, {
          className: cx(styles.icon, CustomIcon.props.className),
        })}
    </div>
  )
}
