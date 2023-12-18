import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import christmasLetterBackgroundImg from 'public/images/christmas_letter_background.png'
import { FC } from 'react'

type ChristmasLetterProps = {
  className?: string
}

export const ChristmasLetter: FC<ChristmasLetterProps> = ({ className }) => {
  return (
    <Column className={className}>
      <Position position={'relative'}>
        <Column width={300} height={'100%'} minHeight={200}>
          <Image
            src={christmasLetterBackgroundImg}
            alt={'christmas letter background image'}
            width={300}
            height={200}
            background={false}
          />
          <Position position={'absolute'} top={28} left={35}>
            <Font type={'heading-20-medium'} color={'gray.800'}>
              이민지 님
            </Font>
          </Position>
          <Position position={'absolute'} top={70} left={30}>
            <Row width={240} height={100}>
              <Font type={'heading-16-medium'} color={'gray.800'}>
                메리 크리스마스!! 내년도 행복하세요!
              </Font>
            </Row>
          </Position>
        </Column>
      </Position>
    </Column>
  )
}
