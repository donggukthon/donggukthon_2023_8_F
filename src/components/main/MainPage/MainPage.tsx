import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { IntroduceModal } from '@components/common/IntroduceModal'
import { LoginModal } from '@components/common/LoginModal'
import { MusicPlayer } from '@components/common/MusicPlayer'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import { useToast } from '@components/common/Toast'
import styled from '@emotion/styled'
import { useUserInfo } from '@hooks/useUserInfo'
import { useRouter } from 'next/router'
import mainDecoration1Img from 'public/images/main_decoration_1.png'
import mainDecoration2Img from 'public/images/main_decoration_2.png'
import mainDecoration3Img from 'public/images/main_decoration_3.png'
import { FC } from 'react'
import { MainTreeCanvas } from '../MainTreeCanvas'

type MainPageProps = {
  className?: string
}

const MAIN_LAYOUT_PAGE_MAX_WIDTH = '100%'
const MAIN_LAYOUT_PAGE_MIN_WIDTH = 320

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { userInfo } = useUserInfo()
  const { push } = useRouter()
  const { showFailToast } = useToast()

  const onClickTreeDetailsButton = () => {
    if (!userInfo) {
      showFailToast({ message: '유저 정보가 전달되지 않았습니다. 관리자에게 문의하세요.' })
      return
    }
    push(`/tree/details/1`)
    return
  }

  return (
    <Column className={className}>
      <Container size={'sm'}>
        <Position position={'relative'}>
          <StyledPaper bgColor={'white'} minHeight={'100vh'}>
            <Row justify={'center'}>
              <Position position={'relative'}>
                <Column width={'100%'} maxWidth={MAIN_LAYOUT_PAGE_MAX_WIDTH} minWidth={MAIN_LAYOUT_PAGE_MIN_WIDTH}>
                  <Position position={'absolute'} top={60} right={20}>
                    <MusicPlayer />
                  </Position>
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
                  <Position position={'absolute'}>
                    <StyledWreathImage
                      src={mainDecoration3Img}
                      alt={'main decoration 3 image'}
                      width={100}
                      height={100}
                      background={false}
                    />
                  </Position>
                  <Position position={'absolute'} top={150}>
                    <StyledCenterColumn gap={15} align={'center'} p={10}>
                      <StyledTitleFont type={['body-18-regular', 'heading-20-regular']} color={'white'}>
                        나만의 3D 트리
                      </StyledTitleFont>
                    </StyledCenterColumn>
                  </Position>
                  <Position position={'absolute'} top={0} left={0}>
                    <Column width={'100%'}>
                      <MainTreeCanvas />
                    </Column>
                  </Position>
                  <Position position={'absolute'} top={635}>
                    <StyledColumn width={'100%'} gap={20}>
                      <IntroduceModal />
                      {userInfo ? (
                        <Paper bgColor={'temp.#588C7E'} radius={12}>
                          <Row
                            px={16}
                            py={10}
                            height={45}
                            justify={'center'}
                            align={'center'}
                            cursor={'pointer'}
                            onClick={onClickTreeDetailsButton}
                          >
                            <StyledTitleFont type={['btn-14-medium', 'btn-16-medium']} color={'white'}>
                              나만의 트리 보러가기
                            </StyledTitleFont>
                          </Row>
                        </Paper>
                      ) : (
                        <LoginModal />
                      )}
                    </StyledColumn>
                  </Position>
                </Column>
              </Position>
            </Row>
          </StyledPaper>
        </Position>
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

const StyledColumn = styled(Column)`
  width: calc(100% - 60px);
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledWreathImage = styled(Image)`
  top: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledTitleFont = styled(Font)`
  &&& {
    font-family: 'KingSejongInstitute';
    /* color: rgb(231, 173, 86); */
    color: white;
  }
`
