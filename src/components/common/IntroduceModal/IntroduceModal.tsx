import { Column } from '@components/common/Column'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import introduceContentImg from 'public/images/introduce_content.png'
import introduceDecoration1Img from 'public/images/introduce_decoration_1.png'
import wreathIconImg from 'public/images/wreath_icon.png'
import { FC } from 'react'
import { Font } from '../Font'
import { Image } from '../Image'
import { Modal } from '../Modal'
import { Paper } from '../Paper'
import { Row } from '../Row'
import { Space } from '../Space'

type IntroduceModalProps = {
  className?: string
}

export const IntroduceModal: FC<IntroduceModalProps> = ({ className }) => {
  const {
    state: isIntroduceModalOpened,
    setTrue: openIntroduceModal,
    setFalse: closeIntroduceModal,
  } = useBooleanState(false)
  return (
    <Modal
      size={'sm'}
      opened={isIntroduceModalOpened}
      closeable={true}
      onClose={closeIntroduceModal}
      renderContent={() => (
        <StyledPaper bgColor={'temp.#F4EAE4'} width={'100%'} overflow={'hidden'} radius={20}>
          <Column className={className} width={'100%'} px={20} py={30} align={'center'}>
            <Image src={wreathIconImg} width={59} height={55} alt={'wreath icon image'} background={false} />
            <Space height={15} />
            <StyledImage
              src={introduceContentImg}
              alt={'introduce content image'}
              width={288}
              height={378}
              background={false}
            />
            <Space height={20} />
            <StyledImage
              src={introduceDecoration1Img}
              alt={'introduce decoration 1 image'}
              width={165}
              height={87}
              background={false}
            />
            <Row cursor={'pointer'} onClick={closeIntroduceModal}>
              <StyledTitleFont type={'btn-12-regular'} color={'gray.800'}>
                닫기
              </StyledTitleFont>
            </Row>
          </Column>
        </StyledPaper>
      )}
      renderOpener={() => (
        <Paper bgColor={'temp.#BC5952'} radius={12}>
          <Row
            px={16}
            py={10}
            height={45}
            justify={'center'}
            align={'center'}
            cursor={'pointer'}
            onClick={openIntroduceModal}
          >
            <StyledTitleFont type={'btn-16-medium'} color={'white'}>
              소개페이지
            </StyledTitleFont>
          </Row>
        </Paper>
      )}
    />
  )
}

const StyledPaper = styled(Paper)`
  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25), 0 10px 10px rgba(255, 255, 255, 0.22);

  @keyframes fadeInDown {
    from {
      opacity: 1;
      transform: translate(0, 0);
    }
    to {
      opacity: 0;
      transform: translate(0, 2rem);
    }
  }
`

const StyledTitleFont = styled(Font)`
  &&& {
    font-family: 'KingSejongInstitute';
    /* color: rgb(231, 173, 86); */
  }
`

const StyledImage = styled(Image)`
  img {
    height: auto;
  }
`
