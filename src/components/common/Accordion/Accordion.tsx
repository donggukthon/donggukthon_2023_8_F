import { useControlledState } from '@hooks/useControlledState'
import cx from 'classnames'
import { FC, ReactElement } from 'react'
import { BoxProps } from '../Box'
import { Column } from '../Column'

type AccordionProps = Pick<BoxProps, 'width'> & {
  className?: string
  as?: keyof JSX.IntrinsicElements
  onChange?: (_expanded: boolean) => void
  renderTitle: () => ReactElement
  renderContent: () => ReactElement
  expanded?: boolean
  defaultExpanded?: boolean
}

export const Accordion: FC<AccordionProps> = ({
  className,
  as: CustomTag = 'li',
  expanded: expandedProp,
  defaultExpanded = false,
  onChange,
  renderTitle,
  renderContent,
  ...props
}) => {
  const [expanded, setExpanded] = useControlledState({ controlled: expandedProp, default: defaultExpanded })

  const toggleAccordion = () => {
    onChange?.(!expanded)
    setExpanded(!expanded)
  }

  return (
    <Column as={CustomTag} className={cx(className)} {...props}>
      <div onClick={toggleAccordion}>{renderTitle()}</div>
      {expanded && renderContent()}
    </Column>
  )
}
