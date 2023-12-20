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
import emailjs from '@emailjs/browser'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import wreathIconImg from 'public/images/wreath_icon.png'
import { FC, useState } from 'react'

type DonatePageProps = {
  className?: string
}

export const DonatePage: FC<DonatePageProps> = ({ className }) => {
  const { showAlarmToast, showFailToast } = useToast()
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { reload } = useRouter()
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [cardMessage, setCardMessage] = useState<string>('')
  const [sendEmail, setSendEmail] = useState<string>('')
  const [sendMessage, setSendMessage] = useState<string>('')

  const onClickSubmitButton = (event: any) => {
    event.preventDefault()

    if (name === '') {
      showAlarmToast({ message: '이름을 입력해주세요.' })
      return
    }
    if (phoneNumber === '') {
      showAlarmToast({ message: '전화번호를 입력해주세요.' })
      return
    }
    if (cardMessage === '') {
      showAlarmToast({ message: '카드 문구를 입력해주세요.' })
      return
    }
    if (sendEmail && !sendMessage) {
      showAlarmToast({ message: '지목한 분에게 보낼 메세지를 입력해주세요.' })
      return
    }

    emailjs.sendForm('service_xhbaizn', 'template_hb4gh0j', event.target, '5ar0IfuRq5suk_xe4').then((res: any) => {
      if (res.status === 200) {
        alert('후원 전송에 성공하였습니다. 기재된 계좌에 입금하시면 관리자 확인 후 승인 처리 됩니다.')
        // reload()
      } else {
        showFailToast({ message: '후원 전송에 실패했습니다. 관리자에게 문의해주세요.' })
      }
    })
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
                  후원하기
                </StyledFont>
              </Column>
              <Space height={30} />
              <Column width={320}>
                <StyledFont type={['btn-12-regular', 'btn-14-regular']} color={'gray.800'} wordBreak={'keep-all'}>
                  {`올해 나만의 3D 트리 수익금은 금융문제로 어려움을 겪는 이들을 돕는 "사회연대은행"에 후원합니다. `}
                </StyledFont>
                <Space height={10} />
                <StyledFont type={['btn-12-regular', 'btn-14-regular']} color={'gray.800'} wordBreak={'keep-all'}>
                  {`이벤트에 참여하여 모두가 행복한 특별한 하루를 만들어보세요. 아래 계좌번호로 여러분의 따뜻한 마음을 어려운 이웃에게 나눠주세요😀`}
                </StyledFont>
                <Space height={10} />
                <StyledFont type={['btn-12-regular', 'btn-14-regular']} color={'gray.800'} wordBreak={'keep-all'}>
                  국민은행 225901-04-250188 이설
                </StyledFont>
              </Column>
              <Space height={30} />
              <Column gap={25} width={320}>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      이름
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    placeholder="이름을 입력해주세요."
                    name={'name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Column>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      전화번호 (ex: 010-0000-0000)
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    placeholder="전화번호를 입력해주세요."
                    name={'phone_number'}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Column>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      카드 문구
                    </StyledFont>
                  </Row>
                  <StyledTextArea
                    name={'card_message'}
                    placeholder="나만의 트리에서 보일 카드 문구를 입력해주세요."
                    value={cardMessage}
                    onChange={(e) => setCardMessage(e.target.value)}
                  />
                </Column>
                <Space height={10} />
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      후원 챌린지 지목 이메일 (선택)
                    </StyledFont>
                  </Row>
                  <StyledTextInput
                    name={'send_email'}
                    placeholder="후원 챌린지를 지목할 이메일을 입력해주세요."
                    value={sendEmail}
                    onChange={(e) => setSendEmail(e.target.value)}
                  />
                </Column>
                <Column gap={5}>
                  <Row ml={5}>
                    <StyledFont type={['btn-12-bold', 'btn-14-bold']} color={'gray.800'}>
                      지목한 분에게 보낼 메세지 (선택)
                    </StyledFont>
                  </Row>
                  <StyledTextArea
                    name={'send_message'}
                    placeholder="지목한 분에게 보낼 메세지를 입력해주세요."
                    value={sendMessage}
                    onChange={(e) => setSendMessage(e.target.value)}
                  />
                </Column>
              </Column>
              <Row mt={30}>
                <StyledContainedButton kind={'cta'} size={'lg'} type={'submit'}>
                  <StyledFont type={'btn-14-bold'} color={'white'}>
                    제출하기
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
