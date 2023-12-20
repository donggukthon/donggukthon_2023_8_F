import { Font } from '@components/common/Font'
import { Row } from '@components/common/Row'
import styled from '@emotion/styled'
import { Switch } from 'antd'
import { FC } from 'react'

type AutoRotateSwitchProps = {
  className?: string
  checked: boolean
  toggleAction: () => void
  fontColor?: string
}

export const AutoRotateSwitch: FC<AutoRotateSwitchProps> = ({
  className,
  checked,
  toggleAction,
  fontColor = 'white',
}) => {
  return (
    <Row
      className={className}
      align={'center'}
      justify={'end'}
      onClick={toggleAction}
      gap={10}
      px={10}
      cursor={'pointer'}
    >
      <StyledTitleFont type={['heading-12-medium', 'heading-14-medium']} color={fontColor as any}>
        자동 회전
      </StyledTitleFont>
      <StyledSwitch checked={checked} size={'small'} />
    </Row>
  )
}

type StyledSwitchProps = {
  checked: boolean
}

const StyledSwitch = styled(Switch)<StyledSwitchProps>`
  &&& {
    background: ${(props) => (props.checked ? `#3a4467` : `#d9d9d9`)};
  }
  &:hover {
    &&& {
      background: #3a4467;
    }
  }
`

const StyledTitleFont = styled(Font)`
  &&& {
    font-family: 'KingSejongInstitute';
    /* color: rgb(231, 173, 86); */
  }
`
