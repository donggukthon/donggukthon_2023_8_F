import { Column } from '@components/common/Column'
import styled from '@emotion/styled'
import { useBooleanState } from '@hooks/useBooleanState'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Font } from '../Font'
import { TextInput } from '../Form/TextInput'
import { Modal } from '../Modal'
import { Paper } from '../Paper'
import { Row } from '../Row'
import { Space } from '../Space'

type LoginModalProps = {
  className?: string
}

export const LoginModal: FC<LoginModalProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useRouter()

  const { setItem: setItemTestLogin } = useLocalStorage('test-login')

  const { state: isOpened, setFalse: closeModal, setTrue: openModal } = useBooleanState(false)

  const onClickLoginButton = () => {
    setItemTestLogin(email)
    closeModal()
    push(`/tree/details/${email}`)
    return
  }

  const onClickJoinButton = () => {
    push(`/user/join`)
    return
  }

  return (
    <Modal
      size="sm"
      onClose={closeModal}
      opened={isOpened}
      closeable={true}
      renderContent={() => (
        <Column className={className} width={'100%'} p={20} align={'center'}>
          <StyledTitleFont type={'btn-16-medium'} color={'gray.700'}>
            로그인
          </StyledTitleFont>
          <Space height={40} />
          <Column width={'100%'} gap={10}>
            <StyledTextInput
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextInput
              placeholder="비밀번호를 입력해주세요."
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Column>
          <Space height={20} />
          <Paper bgColor={'temp.#BC5952'} radius={8} width={'100%'}>
            <Row
              px={16}
              py={10}
              height={40}
              justify={'center'}
              align={'center'}
              cursor={'pointer'}
              onClick={onClickLoginButton}
            >
              <StyledTitleFont type={['btn-12-medium', 'btn-14-medium']} color={'white'}>
                로그인하기
              </StyledTitleFont>
            </Row>
          </Paper>
          <Space height={10} />
          <Paper bgColor={'temp.#588C7E'} radius={8} width={'100%'}>
            <Row
              px={16}
              py={10}
              height={40}
              justify={'center'}
              align={'center'}
              cursor={'pointer'}
              onClick={onClickJoinButton}
            >
              <StyledTitleFont type={['btn-12-medium', 'btn-14-medium']} color={'white'}>
                회원가입하기
              </StyledTitleFont>
            </Row>
          </Paper>
        </Column>
      )}
      renderOpener={() => (
        <Paper bgColor={'temp.#588C7E'} radius={12}>
          <Row px={16} py={10} height={45} justify={'center'} align={'center'} cursor={'pointer'} onClick={openModal}>
            <StyledTitleFont type={'btn-16-medium'} color={'white'}>
              로그인
            </StyledTitleFont>
          </Row>
        </Paper>
      )}
    />
  )
}

const StyledTextInput = styled(TextInput)`
  font-size: 12px;
  height: 36px;
`

const StyledTitleFont = styled(Font)`
  &&& {
    font-family: 'KingSejongInstitute';
    /* color: rgb(231, 173, 86); */
  }
`
