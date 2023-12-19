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
import styled from '@emotion/styled'
import wreathIconImg from 'public/images/wreath_icon.png'
import { FC } from 'react'

type DonatePageProps = {
  className?: string
}

export const DonatePage: FC<DonatePageProps> = ({ className }) => {
  return (
    <Column className={className}>
      <Container size={'sm'}>
        <StyledPaper minHeight={'100vh'}>
          <Column align={'center'} gap={5} p={20}>
            <Image src={wreathIconImg} alt={'wreath icon image'} width={80} height={80} background={false} />
            <Column align={'center'}>
              <StyledFont type={'heading-16-bold'} color={'gray.800'}>
                기부하기
              </StyledFont>
            </Column>
            <Space height={30} />
            <Column width={280}>
              <Font type={'btn-14-regular'} color={'gray.700'}>
                나만의 3D 트리 프로젝트는 ~~로 기부합니다. 다음의 계좌로 2,000원을 입금해주시면 됩니다.
              </Font>
              <Space height={10} />
              <Font type={'btn-14-regular'} color={'gray.700'}>
                국민은행 225901-04-250188 이설
              </Font>
            </Column>
            <Space height={30} />
            <Column gap={25} width={280}>
              <Column gap={5}>
                <Row ml={5}>
                  <Font type={'btn-14-bold'} color={'gray.800'}>
                    이름
                  </Font>
                </Row>
                <StyledTextInput placeholder="이름을 입력해주세요." />
              </Column>
              <Column gap={5}>
                <Row ml={5}>
                  <Font type={'btn-14-bold'} color={'gray.800'}>
                    전화번호
                  </Font>
                </Row>
                <StyledTextInput placeholder="전화번호를 입력해주세요." />
              </Column>
              <Column gap={5}>
                <Row ml={5}>
                  <Font type={'btn-14-bold'} color={'gray.800'}>
                    카드 문구
                  </Font>
                </Row>
                <StyledTextArea placeholder="나만의 트리에서 보일 카드 문구를 입력해주세요." />
              </Column>
            </Column>
            <Row mt={30}>
              <StyledContainedButton kind={'cta'} size={'lg'}>
                제출하기
              </StyledContainedButton>
            </Row>
          </Column>
        </StyledPaper>
      </Container>
    </Column>
  )
}

const StyledPaper = styled(Paper)``

const StyledTextInput = styled(TextInput)`
  height: 40px;
  font-size: 12px;
`

const StyledTextArea = styled(TextArea)`
  height: 80px;
  font-size: 12px;
  line-height: 150%;
`

const StyledContainedButton = styled(ContainedButton)`
  width: 280px;
  background: #d7c8bd;
`

const StyledFont = styled(Font)`
  font-family: 'KingSejongInstitute';
`
