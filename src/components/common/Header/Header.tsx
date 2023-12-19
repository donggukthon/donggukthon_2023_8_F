import { useGetUserInfoQuery } from '@apis/getUserInfo'
import { Column } from '@components/common/Column'
import { CONTAINER_MAX_WIDTH, DRAWER_WIDTH, HEADER_HEIGHT } from '@constants/layout'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { useRouter } from 'next/router'
import closeIconImg from 'public/images/close_icon.png'
import drawerMenu2Img from 'public/images/drawer_menu_2.png'
import drawerMenu3Img from 'public/images/drawer_menu_3.png'
import drawerMenu6Img from 'public/images/drawer_menu_6.png'
import menuIconImg from 'public/images/menu_icon.png'
import { FC } from 'react'
import { Drawer } from '../Drawer'
import { Font } from '../Font'
import { Image } from '../Image'
import { Link } from '../Link'
import { Paper } from '../Paper'
import { Position } from '../Position'
import { Row } from '../Row'
import { Space } from '../Space'
import { useToast } from '../Toast'

type HeaderProps = {
  className?: string
  title?: string
  isTreePage?: boolean
}

const MENU_ITEM = [
  // {
  //   icon: drawerMenu1Img,
  //   label: '서비스 소개',
  //   link: '/introduce',
  // },
  {
    icon: drawerMenu2Img,
    label: '나만의 트리',
    link: '/tree/details/1',
  },
  {
    icon: drawerMenu3Img,
    label: '기부하기',
    link: '/donate',
  },
  // {
  //   icon: drawerMenu4Img,
  //   label: '명예의 전당',
  //   link: '',
  // },
  // {
  //   icon: drawerMenu5Img,
  //   label: '마이페이지',
  //   link: '/mypage',
  // },
]

export const Header: FC<HeaderProps> = ({ className, title = '나만의 3D 트리', isTreePage = false }) => {
  const { state: drawerOpen, toggleState: toggleDrawer, setFalse: closeDrawer } = useBooleanState(false)
  const { showAlarmToast } = useToast()
  const { removeItem: removeTokenItem } = useLocalStorage('token')
  const { refetch: userInfoRefetch } = useGetUserInfoQuery({ variables: {} })
  const { push } = useRouter()

  const onClickHomeButton = () => {
    push('/')
  }

  const onClickMenuItem = (link: string) => () => {
    if (link === '') {
      showAlarmToast({ message: '구현 중인 기능입니다.' })
      return
    }
  }

  const onClickLogoutButton = () => {
    removeTokenItem()
    push('/')
    closeDrawer()
    userInfoRefetch()
    return
  }

  return (
    <Position position={'fixed'} top={0} left={0}>
      <StyledPaper width={'100%'} bgColor={isTreePage ? 'temp.#2a396b' : 'temp.#9B7356'}>
        <Column className={className} width={'100%'} height={HEADER_HEIGHT} align={'center'}>
          <Row
            maxWidth={CONTAINER_MAX_WIDTH}
            width={'100%'}
            height={'100%'}
            justify={'between'}
            align={'center'}
            px={20}
          >
            <Row onClick={onClickHomeButton} cursor={'pointer'}>
              {/* <Image src={homeIconImg} alt={'home icon image'} width={24} height={24} background={false} /> */}
            </Row>
            <Row>
              <StyledFont type={['btn-14-medium', 'btn-16-medium']} color={'white'}>
                {title}
              </StyledFont>
            </Row>
            <Row cursor={'pointer'}>
              <Drawer
                opened={drawerOpen}
                onClose={closeDrawer}
                direction="right"
                renderOpener={() => (
                  <Row cursor={'pointer'} onClick={toggleDrawer}>
                    <Image src={menuIconImg} alt={'menu icon image'} width={24} height={24} background={false} />
                  </Row>
                )}
                renderContent={() => (
                  <Paper bgColor={'temp.#4F463E'} width={DRAWER_WIDTH} height={'100%'}>
                    <Column width={DRAWER_WIDTH} height={'100%'} py={20} px={25}>
                      <Row justify={'between'} align={'center'}>
                        <Font type={['btn-16-bold', 'heading-18-bold']} color={'white'}>
                          메뉴
                        </Font>
                        <Row cursor={'pointer'} onClick={closeDrawer}>
                          <Image
                            src={closeIconImg}
                            alt={'close icon image'}
                            width={16}
                            height={16}
                            background={false}
                          />
                        </Row>
                      </Row>
                      <Space height={40} />
                      <Column gap={20}>
                        {MENU_ITEM.map((value, index) => (
                          <Link
                            href={value.link}
                            key={`header_menu_item_${index}`}
                            onClick={onClickMenuItem(value.link)}
                          >
                            <Row gap={10} align={'center'}>
                              <Image
                                src={value.icon}
                                alt={`${value.label} 아이콘`}
                                width={[16, 20]}
                                height={[16, 20]}
                                background={false}
                              />
                              <Font type={['btn-12-medium', 'btn-14-medium']} color={'white'}>
                                {value.label}
                              </Font>
                            </Row>
                          </Link>
                        ))}

                        <Row gap={10} align={'center'} onClick={onClickLogoutButton} cursor={'pointer'}>
                          <Image
                            src={drawerMenu6Img}
                            alt={`로그아웃 아이콘`}
                            width={[16, 20]}
                            height={[16, 20]}
                            background={false}
                          />
                          <Font type={['btn-12-medium', 'btn-14-medium']} color={'white'}>
                            로그아웃
                          </Font>
                        </Row>
                      </Column>
                    </Column>
                  </Paper>
                )}
              />
            </Row>
          </Row>
        </Column>
      </StyledPaper>
    </Position>
  )
}

const StyledPaper = styled(Paper)`
  z-index: 999;
`

const StyledFont = styled(Font)`
  font-family: 'KingSejongInstitute';
`
