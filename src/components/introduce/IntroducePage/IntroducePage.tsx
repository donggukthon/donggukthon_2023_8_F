import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Space } from '@components/common/Space'
import styled from '@emotion/styled'
import introduceDecoration1Img from 'public/images/introduce_decoration_1.png'
import introduceDecoration2Img from 'public/images/introduce_decoration_2.png'
import mainDecoration1Img from 'public/images/main_decoration_1.png'
import mainDecoration2Img from 'public/images/main_decoration_2.png'
import mainDecoration3Img from 'public/images/main_decoration_3.png'
import { FC } from 'react'

const INTRODUCE_LAYOUT_PAGE_MAX_WIDTH = 375
const INTRODUCE_LAYOUT_PAGE_MIN_WIDTH = 320

type IntroducePageProps = {
  className?: string
}

export const IntroducePage: FC<IntroducePageProps> = ({ className }) => {
  return (
    <Container size={'sm'} className={className}>
      <Position position={'relative'}>
        <Paper bgColor={'temp.#D7C8BD'} minHeight={'100vh'}>
          <Column align={'center'}>
            <Position position={'absolute'} top={2} left={0}>
              <Image
                src={mainDecoration1Img}
                alt={'main decoration 1 image'}
                width={96}
                height={110}
                background={false}
              />
            </Position>
            <Position position={'absolute'} top={2} right={0}>
              <Image
                src={mainDecoration2Img}
                alt={'main decoration 2 image'}
                width={132}
                height={110}
                background={false}
              />
            </Position>
            <Position position={'absolute'} top={26} left={200}>
              <Image
                src={mainDecoration3Img}
                alt={'main decoration 3 image'}
                width={100}
                height={100}
                background={false}
              />
            </Position>
            <Space height={28} />
            <StyledPaper bgColor={'white'} width={INTRODUCE_LAYOUT_PAGE_MAX_WIDTH} minHeight={'100vh'} radius={20}>
              <Column
                width={'100%'}
                maxWidth={INTRODUCE_LAYOUT_PAGE_MAX_WIDTH}
                minWidth={INTRODUCE_LAYOUT_PAGE_MIN_WIDTH}
                align={'center'}
              >
                <Space height={120} />
                <StyledImage
                  src={introduceDecoration2Img}
                  alt={'서비스 소개 글'}
                  width={288}
                  height={386}
                  background={false}
                />
                <Space height={40} />
                <StyledImage
                  src={introduceDecoration1Img}
                  alt={'서비스 소개 데코레이션 이미지'}
                  width={256}
                  height={139}
                  background={false}
                />
              </Column>
            </StyledPaper>
          </Column>
        </Paper>
      </Position>
    </Container>
  )
}

const StyledPaper = styled(Paper)`
  background: #fffdfd55;
`

const StyledImage = styled(Image)`
  img {
    height: auto;
  }
`
