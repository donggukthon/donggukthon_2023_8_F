import { ChangeEvent, forwardRef } from 'react'
import { Box } from '@components/common/Box'
import fontVariants from '@components/common/Font/fontVariants'
import { variant } from 'styled-system'
import styled from '@emotion/styled'
import { BaseProps } from '@components/common/core/base'
import { useControlledState } from '@hooks/useControlledState'
import { css } from '@emotion/react'
import { Position } from '@components/common/Position'
import ArrowDownIcon from '@components/common/svgs/ArrowDownIcon'

export type SelectOptionType = {
  value: string
  label: string
}

export type SelectProps = Omit<BaseProps<HTMLSelectElement>, 'as'> & {
  size: 'sm' | 'md' | 'lg'
  placeholder?: string
  options: SelectOptionType[]
  value?: SelectOptionType['value']
  disabled?: boolean
  onChange?: (_e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = styled(
  forwardRef<HTMLSelectElement, SelectProps>(
    ({ value: valueProp, options, placeholder, onChange, className, disabled }, ref) => {
      const [selectedValue, setSelectedValueIfUncontrolled] = useControlledState({ controlled: valueProp, default: '' })

      const selectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValueIfUncontrolled(e.target.value)
        onChange?.(e)
      }

      return (
        <Position position="relative">
          <Box position="relative" width="100%">
            <StyledSelect
              ref={ref}
              disabled={disabled}
              className={className}
              value={selectedValue}
              onChange={selectValue}
              valueExist={Boolean(selectedValue)}
            >
              {placeholder && (
                <option value="" hidden={true} disabled={true} selected={true}>
                  {placeholder}
                </option>
              )}
              {!disabled &&
                options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </StyledSelect>

            <Position position="absolute" type="vertical-full" right={16}>
              <Box display="flex" alignItems="center" pointerEvents="none">
                <StyledArrowDownIcon disabled={disabled} />
              </Box>
            </Position>
          </Box>
        </Position>
      )
    }
  )
)<SelectProps>(
  variant({
    prop: 'size',
    variants: {
      lg: { ...fontVariants['heading-18-regular'] },
      md: { ...fontVariants['heading-16-regular'] },
      sm: { ...fontVariants['heading-14-regular'] },
    },
  })
)

const StyledSelect = styled.select<{ valueExist: boolean }>`
  width: 100%;
  height: 100%;
  padding: 10px 40px 10px 16px;
  border-radius: 4px;
  appearance: none;
  border: 1px solid #e9ecef;
  cursor: pointer;

  &:disabled {
    background-color: #f1f3f5;
  }

  ${(props) =>
    !props.valueExist &&
    css`
      color: #aeb5ba;
    `}
`

const StyledArrowDownIcon = styled(ArrowDownIcon)<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`
