import { useGetHallListQuery } from '@apis/getHallList'
import { usePostUserJoinMutation } from '@apis/postUserJoin'
import { ContainedButton } from '@components/common/Button/ContainedButton'
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { TextArea } from '@components/common/Form/TextArea'
import { TextInput } from '@components/common/Form/TextInput'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import { useToast } from '@components/common/Toast'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import wreathIconImg from 'public/images/wreath_icon.png'
import { FC, useState } from 'react'

type UserJoinPageProps = {
  className?: string
}

export const UserJoinPage: FC<UserJoinPageProps> = ({ className }) => {
  const { showAlarmToast } = useToast()
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { reload } = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const { mutate: userJoinMutate } = usePostUserJoinMutation({
    onSuccess: (e: any) => {
      console.log({ e })
    },
    onError: (e: any) => {
      console.log({ e })
    },
  })
  const { data: hallListData } = useGetHallListQuery({ variables: {} })

  console.log({ hallListData })

  const onClickSubmitButton = (event: any) => {
    event.preventDefault()

    if (email === '') {
      showAlarmToast({ message: '이름을 입력해주세요.' })
      return
    }
    if (password === '') {
      showAlarmToast({ message: '비밀번호를 입력해주세요.' })
      return
    }
    if (passwordConfirm !== password) {
      showAlarmToast({ message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' })
      return
    }
    if (nickname === '') {
      showAlarmToast({ message: '닉네임을 입력해주세요.' })
      return
    }
    userJoinMutate({ email, password, name: nickname })
  }

  return (
    <Column className={className}>
      <Container size={'sm'}>
        <form onSubmit={onClickSubmitButton}>
          <StyledPaper minHeight={'100vh'}>
            <Column align={'center'} gap={5} p={20}>
              <Image src={wreathIconImg} alt={'wreath icon image'} width={80} height={80} background={false} />
              <Column align={'center'}>
                <StyledFont type={['btn-14-bold', 'btn-16-regular']} color={'gray.800'} wordBreak={'keep-all'}>
                  회원가입
                </StyledFont>
              </Column>
              <Space height={30} />
              <Column gap={25} width={320}>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      이메일
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    placeholder="이메일을 입력해주세요."
                    name={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Column>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      비밀번호
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    type={'password'}
                    placeholder="비밀번호를 입력해주세요."
                    name={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Column>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      비밀번호 확인
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    type={'password'}
                    placeholder="비밀번호 확인을 입력해주세요."
                    name={'password_confirm'}
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </Column>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      닉네임
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    placeholder="닉네임을 입력해주세요."
                    name={'nickname'}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </Column>
              </Column>
              <Row mt={30}>
                <StyledContainedButton kind={'cta'} size={'lg'} type={'submit'}>
                  <StyledFont type={'btn-14-bold'} color={'white'}>
                    회원가입하기
                  </StyledFont>
                </StyledContainedButton>
              </Row>
            </Column>
          </StyledPaper>
        </form>
      </Container>
    </Column>
  )
}

const StyledPaper = styled(Paper)``

const StyledTextInput = styled(TextInput)`
  height: 40px;
  font-family: 'KingSejongInstitute';
  font-size: 12px;
`

const StyledTextArea = styled(TextArea)`
  height: 80px;
  font-family: 'KingSejongInstitute';
  font-size: 12px;
  line-height: 150%;
`

const StyledContainedButton = styled(ContainedButton)`
  width: 320px;
  background: #d7c8bd;
`

const StyledFont = styled(Font)`
  font-family: 'KingSejongInstitute';
`
