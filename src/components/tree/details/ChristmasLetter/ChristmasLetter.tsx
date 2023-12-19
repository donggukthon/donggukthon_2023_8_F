import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import styled from '@emotion/styled'
import christmasLetterBackgroundImg from 'public/images/christmas_letter_background.png'
import { FC } from 'react'

type ChristmasLetterProps = {
  className?: string
  name: string
  content: string
}

export const ChristmasLetter: FC<ChristmasLetterProps> = ({ className, name, content }) => {
  return (
    <Column className={className}>
      <Position position={'relative'}>
        <Column width={320} height={'100%'} minHeight={200}>
          <StyledImage
            src={christmasLetterBackgroundImg}
            alt={'christmas letter background image'}
            width={320}
            height={200}
            background={false}
          />
          <Position position={'absolute'} top={28} left={35}>
            <StyledFont type={'heading-20-medium'} color={'gray.800'}>
              {name} 님
            </StyledFont>
          </Position>
          <Position position={'absolute'} top={70} left={30}>
            <Row width={240} height={100}>
              <StyledFont type={'heading-16-medium'} color={'gray.800'}>
                {content}
              </StyledFont>
            </Row>
          </Position>
        </Column>
      </Position>
    </Column>
  )
}

const StyledImage = styled(Image)`
  img {
    height: auto;
  }
`

const StyledFont = styled(Font)`
  font-family: 'KingSejongInstitute';
`
