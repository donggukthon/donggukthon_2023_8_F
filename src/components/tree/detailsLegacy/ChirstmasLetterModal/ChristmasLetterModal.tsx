import { Column } from '@components/common/Column'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Modal } from '@components/common/Modal'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import mailIconImg from 'public/images/mail_icon.png'
import { FC } from 'react'
import { ChristmasLetter } from '../ChristmasLetter'

type ChristmasLetterModalProps = {
  className?: string
  name: string
  content: string
}

export const ChristmasLetterModal: FC<ChristmasLetterModalProps> = ({ className, name, content }) => {
  const { state: isModalOpened, setTrue: openModal, setFalse: closeModal } = useBooleanState(false)
  return (
    <Modal
      size={'sm'}
      opened={isModalOpened}
      closeable={true}
      onClose={closeModal}
      renderContent={() => (
        <StyledPaper bgColor={'temp.#F4EAE4'} width={'100%'} overflow={'hidden'} radius={20}>
          <Column className={className} width={'100%'} px={15} py={30} align={'center'}>
            <ChristmasLetter name={name} content={content} />
            <Space height={40} />
            <Row cursor={'pointer'} onClick={closeModal}>
              <StyledTitleFont type={'btn-12-regular'} color={'gray.800'}>
                닫기
              </StyledTitleFont>
            </Row>
          </Column>
        </StyledPaper>
      )}
      renderOpener={() => (
        <Paper bgColor={'temp.#2d396855'} radius={30}>
          <Row p={10} cursor={'pointer'} onClick={openModal}>
            <Image src={mailIconImg} width={24} height={24} alt={'edit icon image'} background={false} />
          </Row>
        </Paper>
      )}
    />
  )
}

const StyledPaper = styled(Paper)`
  box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25), 0 10px 10px rgba(255, 255, 255, 0.22);
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
