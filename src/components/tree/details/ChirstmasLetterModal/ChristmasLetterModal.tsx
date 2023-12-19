import { Column } from '@components/common/Column'
import { FC } from 'react'

type ChristmasLetterModalProps = {
  className?: string
}

export const ChristmasLetterModal: FC<ChristmasLetterModalProps> = ({ className }) => {
  return <Column className={className}>ChristmasLetterModal</Column>
}
