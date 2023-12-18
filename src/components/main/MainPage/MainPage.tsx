import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import styled from '@emotion/styled'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { useRouter } from 'next/router'
import googleIconImage from 'public/images/google_icon.png'
import mainDecoration1Img from 'public/images/main_decoration_1.png'
import mainDecoration2Img from 'public/images/main_decoration_2.png'
import mainDecoration3Img from 'public/images/main_decoration_3.png'
import mainDecoration4Img from 'public/images/main_decoration_4.png'
import mainTitleTypoImg from 'public/images/main_title_typo.png'
import { FC } from 'react'

type MainPageProps = {
  className?: string
}

const MAIN_LAYOUT_PAGE_MAX_WIDTH = 375
const MAIN_LAYOUT_PAGE_MIN_WIDTH = 320

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { push } = useRouter()
  const { setItem: setTestLoginItem } = useLocalStorage('test_login')

  const onClickTestLoginButton = () => {
    setTestLoginItem(2)
    push('/tree/details/1')
    return
  }

  const onClickSubmitButton = () => {
    push('/user/join')
    return
  }

  return (
    <Column className={className}>
      <Container size={'sm'}>
        <StyledPaper bgColor={'white'} minHeight={'100vh'}>
          <Row justify={'center'}>
            <Position position={'relative'}>
              <Column width={'100%'} maxWidth={MAIN_LAYOUT_PAGE_MAX_WIDTH} minWidth={MAIN_LAYOUT_PAGE_MIN_WIDTH}>
                <Space height={110} />
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
                <Position position={'absolute'} top={26} left={140}>
                  <Image
                    src={mainDecoration3Img}
                    alt={'main decoration 3 image'}
                    width={100}
                    height={100}
                    background={false}
                  />
                </Position>
                <Position position={'absolute'} top={165}>
                  <StyledCenterColumn gap={15} align={'center'} p={10}>
                    <Image
                      src={mainTitleTypoImg}
                      alt={'main title typo image'}
                      width={230}
                      height={32}
                      background={false}
                    />
                    <Font type={'heading-14-regular'} color={'gray.850'}>
                      🎄❄️ 3D 트리와 함께 따뜻한 마음을 나눠요! 🎄❄️
                    </Font>
                  </StyledCenterColumn>
                </Position>
                <Position position={'absolute'} top={215} left={0}>
                  <Image
                    src={mainDecoration4Img}
                    alt={'main decoration 4 image'}
                    width={343}
                    height={395}
                    background={false}
                  />
                </Position>
                <Position position={'absolute'} top={635}>
                  <StyledCenterPaper bgColor={'white'} radius={12}>
                    <Row
                      px={16}
                      py={10}
                      height={45}
                      justify={'center'}
                      align={'center'}
                      cursor={'pointer'}
                      onClick={onClickTestLoginButton}
                    >
                      <Font type={'btn-16-medium'} color={'gray.800'}>
                        테스트 로그인 하기
                      </Font>
                    </Row>
                  </StyledCenterPaper>
                </Position>
                <Position position={'absolute'} top={695}>
                  <StyledCenterPaper bgColor={'white'} radius={12}>
                    <Row
                      px={16}
                      py={10}
                      height={45}
                      justify={'between'}
                      align={'center'}
                      cursor={'pointer'}
                      onClick={onClickSubmitButton}
                    >
                      <Image alt={'google icon'} src={googleIconImage} width={25} height={25} />
                      <Font type={'btn-16-medium'} color={'gray.800'}>
                        구글로 시작하기
                      </Font>
                      <Space width={25} height={25} />
                    </Row>
                  </StyledCenterPaper>
                </Position>
              </Column>
            </Position>
          </Row>
        </StyledPaper>
      </Container>
    </Column>
  )
}

const StyledPaper = styled(Paper)`
  background: linear-gradient(179.99deg, #997052 0.01%, rgba(187, 152, 127, 0) 113.53%);
`

const StyledCenterColumn = styled(Column)`
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledCenterPaper = styled(Paper)`
  width: calc(100% - 40px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
