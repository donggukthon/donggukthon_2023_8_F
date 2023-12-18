import { Border } from '@components/common/Border'
import { ContainedButton } from '@components/common/Button/ContainedButton'
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { CheckBox } from '@components/common/Form/CheckBox'
import { TextArea } from '@components/common/Form/TextArea'
import { TextInput, TextInputProps } from '@components/common/Form/TextInput'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import { useToast } from '@components/common/Toast'
import { PROJECT_VERSION } from '@constants/version'
import emailjs from '@emailjs/browser'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { CustomizePlayground } from '../CustomizePlayground'
import { BETA_APPLY_METADATA } from './constant'

type BetaApplyPageProps = {
  className?: string
}

const ResponsiveTextInput = (props: TextInputProps) => {
  return (
    <>
      <StyledDesktopTextInput {...props} />
    </>
  )
}

const StyledDesktopTextInput = styled(TextInput)`
  &&& {
    width: 100%;
    height: 32px;
    font-size: 12px;
    padding: 10px;
    border-radius: 0;
  }
`

export const BetaApplyPage: FC<BetaApplyPageProps> = ({ className }) => {
  const { showAlarmToast } = useToast()
  const { reload } = useRouter()
  const betaApplyMetadata = BETA_APPLY_METADATA

  const [question1, setQuestion1] = useState<string>('')
  const [question2, setQuestion2] = useState<string>('')
  const [question3, setQuestion3] = useState<string>('')
  const [question4, setQuestion4] = useState<string>('')
  const [question5, setQuestion5] = useState<string>('')
  const [question6, setQuestion6] = useState<string>('')
  const [question7, setQuestion7] = useState<string>('')
  const [question8, setQuestion8] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.getItem('PROJECT_VERSION') !== PROJECT_VERSION) {
      setTimeout(() => {
        localStorage.setItem('PROJECT_VERSION', PROJECT_VERSION)
        reload()
      }, 300)
    }
  }, [reload])

  const onClickSubmitButton = (event: any) => {
    event.preventDefault()
    if (question1 === '') {
      showAlarmToast({ message: '이름과 전화번호를 입력해주세요.' })
      return
    }

    if (question2 === '') {
      showAlarmToast({ message: '성별과 연령대를 입력해주세요.' })
      return
    }

    if (question3 === '') {
      showAlarmToast({ message: '본인이 생각하는 적정 기부금의 액수를 입력해주세요.' })
      return
    }

    if (question4 === '') {
      showAlarmToast({ message: '불편한 점이나 의견을 입력해주세요.' })
      return
    }

    if (question5 === '') {
      showAlarmToast({ message: '추가되었으면 하는 장식을 입력해주세요.' })
      return
    }
    emailjs.sendForm('service_xhbaizn', 'template_1au0h3e', event.target, '5ar0IfuRq5suk_xe4').then((res: any) => {
      if (res.status === 200) {
        alert('설문지 전송에 성공하였습니다.')
        window.location.reload()
      } else {
        alert('설문지 전송에 실패하였습니다. 관리자에게 문의해주세요.')
      }
    })
    return
  }
  return (
    <Container size={'sm'}>
      <form onSubmit={onClickSubmitButton}>
        <Paper bgColor={'white'}>
          <Column className={className} p={[20, 30]} mt={20} align={'center'}>
            <Font type={['heading-20-bold', 'display-22-bold']} color={'gray.800'}>
              {betaApplyMetadata.title}
            </Font>
            <Space height={10} />
            <Font type={['heading-12-regular', 'heading-14-regular']} color={'gray.900'}>
              {betaApplyMetadata.subtitle}
            </Font>
            <Space height={20} />
            <Column width={'100%'} ml={15}>
              <StyledFont type={['heading-12-regular', 'heading-14-regular']} color={'gray.800'}>
                {betaApplyMetadata.description}
              </StyledFont>
              <Space height={5} />
              <StyledFont type={['body-10-regular', 'heading-12-regular']} color={'gray.800'}>
                {betaApplyMetadata.manager}
              </StyledFont>
            </Column>
            <Space height={20} />
            <Border thickness={1} color={'gray.300'}>
              <Column align={'center'} p={[16, 20]} width={'fit-content'}>
                <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                  {betaApplyMetadata.introduce.title}
                </Font>
                <Space height={15} />
                <Column gap={2}>
                  {betaApplyMetadata.introduce.content.map((value, index) => (
                    <Font
                      type={['body-10-regular', 'heading-12-regular']}
                      color={'gray.800'}
                      key={`introduce_content_${index}`}
                    >
                      {value}
                    </Font>
                  ))}
                </Column>
              </Column>
            </Border>
            <Space height={40} />
            <Font type={['heading-14-medium', 'heading-18-bold']} color={'gray.900'}>
              설문지
            </Font>
            <Space height={40} />
            <Column width={'100%'}>
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                이름/사용할 이메일을 입력해주세요. (예시: 홍길동/my3dtree1234@gmail.com)
              </Font>
              <Space height={10} />
              <ResponsiveTextInput
                placeholder={'이름/사용할 이메일을 입력해주세요.'}
                value={question1}
                onChange={(e) => setQuestion1(e.target.value)}
                name="question_1"
              />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                성별/연령대를 입력해주세요. (예시: 남/20대)
              </Font>
              <Space height={10} />
              <ResponsiveTextInput
                placeholder={'성별/연령대를 입력해주세요.'}
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)}
                name="question_2"
              />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                3D 트리 체험
              </Font>
              <Space height={10} />
              <CustomizePlayground />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                무료로는 장식을 4개까지 사용할 수 있고 기부를 한다면 장식을 10개까지 사용할 수 있습니다. <br /> 위
                서비스의 적정 비용(기부금)이라고 생각하는 비용을 입력해주세요. <br /> 현재는 약 2000원 정도로 책정하고
                있습니다.
              </Font>
              <Space height={10} />
              <ResponsiveTextInput
                placeholder={'적정 비용(기부금)을 입력해주세요.'}
                value={question3}
                onChange={(e) => setQuestion3(e.target.value)}
                name="question_3"
              />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                3D 트리에 대한 불편함이나 본인의 의견을 말씀해주세요. (ex: 시야가 너무 불편하다. 모바일에서 버벅인다 등)
              </Font>
              <Space height={10} />
              <ResponsiveTextInput
                placeholder={'3D 트리에 대한 불편함이나 본인의 의견을 말씀해주세요.'}
                value={question4}
                onChange={(e) => setQuestion4(e.target.value)}
                name="question_4"
              />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                추가되었으면 하는 장식을 입력해주세요.
              </Font>
              <Space height={10} />
              <ResponsiveTextInput
                placeholder={'추가되었으면 하는 장식을 입력해주세요.'}
                value={question5}
                onChange={(e) => setQuestion5(e.target.value)}
                name="question_5"
              />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                추가되었으면 하는 기능을 입력해주세요.(선택)
              </Font>
              <Space height={10} />
              <StyledTextArea
                placeholder={'추가되었으면 하는 기능을 입력해주세요.'}
                value={question6}
                onChange={(e) => setQuestion6(e.target.value)}
                name="question_6"
              />
              <Space height={[20, 40]} />
              <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                기타 의견을 입력해주세요.(선택)
              </Font>
              <Space height={10} />
              <StyledTextArea
                placeholder={'기타 의견을 입력해주세요.'}
                value={question7}
                onChange={(e) => setQuestion7(e.target.value)}
                name="question_7"
              />
              <Space height={[20, 40]} />
              <Row align={'center'} gap={10} cursor={'pointer'} onClick={() => setQuestion8((prev) => !prev)}>
                <CheckBox checked={question8} name="question_8" value={question8 ? '동의' : '비동의'} />
                <Font type={['heading-12-medium', 'heading-14-medium']} color={'gray.800'}>
                  추후에 나오는 기능에 대해 지속적으로 피드백을 하고 싶다면 체크해주세요.
                </Font>
              </Row>
            </Column>
            <Space height={40} />
            <Row width={'100%'}>
              <StyledFont type={'body-10-regular'}>{betaApplyMetadata.terms}</StyledFont>
            </Row>
            <Space height={20} />
            <Row width={'100%'}>
              <ContainedButton kind={'cta'} size={'md'} style={{ width: '100%', borderRadius: 0 }} type={'submit'}>
                제출하기
              </ContainedButton>
            </Row>
          </Column>
        </Paper>
      </form>
    </Container>
  )
}

const StyledFont = styled(Font)`
  width: fit-content;
  white-space: pre-line;
`

const StyledTextArea = styled(TextArea)`
  &&& {
    width: 100%;
    font-size: 12px;
    padding: 10px;
    border-radius: 0;
  }
`
