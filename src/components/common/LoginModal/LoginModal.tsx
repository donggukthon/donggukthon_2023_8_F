import { usePostUserLoginMutation } from '@apis/postUserLogin'
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
import { useToast } from '../Toast'

type LoginModalProps = {
  className?: string
}

export const LoginModal: FC<LoginModalProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { push } = useRouter()
  const { showFailToast } = useToast()
  const { setItem: setItemTestToken } = useLocalStorage('token')
  const { mutate: userLoginMutate } = usePostUserLoginMutation({
    onSuccess: (e) => {
      if (e.status === 'SUCCESS') {
        setItemTestToken(e.data)
        closeModal()
      }
      if (e.status === 'FAILED') {
        showFailToast({ message: '로그인에 실패했습니다.' })
      }
    },
    onError: () => {
      showFailToast({ message: '로그인에 실패했습니다.' })
    },
  })

  const { state: isOpened, setFalse: closeModal, setTrue: openModal } = useBooleanState(false)

  const onClickLoginButton = () => {
    userLoginMutate({ email, password })
    push('/tree/details/1')
    return
  }

  const onClickJoinButton = () => {
    push(`/user/join`)
    return
  }

  const onKeyPressEnter = (e: any) => {
    if (e.key === 'Enter') {
      onClickLoginButton()
      return
    }
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
              onKeyDown={onKeyPressEnter}
            />
            <StyledTextInput
              placeholder="비밀번호를 입력해주세요."
              type={'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={onKeyPressEnter}
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
            <StyledTitleFont type={['btn-14-medium', 'btn-16-medium']} color={'white'}>
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
