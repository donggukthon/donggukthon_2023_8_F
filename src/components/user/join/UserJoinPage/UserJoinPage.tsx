import { ContainedButton } from '@components/common/Button/ContainedButton'
import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { Radio } from '@components/common/Form/Radio'
import { TextInput } from '@components/common/Form/TextInput'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Row } from '@components/common/Row'
import { Space } from '@components/common/Space'
import styled from '@emotion/styled'
import wreathIconImg from 'public/images/wreath_icon.png'
import { FC, useState } from 'react'

type UserJoinPageProps = {
  className?: string
}

type GenderType = 'MALE' | 'FEMALE' | 'INIT'

export const UserJoinPage: FC<UserJoinPageProps> = ({ className }) => {
  const [gender, setGender] = useState<GenderType>('INIT')

  const onClickGenderRadio = (type: GenderType) => () => {
    setGender(type)
  }

  return (
    <Column className={className}>
      <Container size={'sm'}>
        <StyledPaper bgColor={'temp.#D7C8BD'} minHeight={'100vh'}>
          <Column px={20} py={36}>
            <Paper radius={20} bgColor={'temp.#FFFDFD85'}>
              <Column align={'center'} gap={5} px={20} pb={20}>
                <Image src={wreathIconImg} alt={'wreath icon image'} width={80} height={80} background={false} />
                <Column align={'center'}>
                  <Font type={'heading-16-bold'} color={'gray.800'}>
                    나만의 3D트리
                  </Font>
                  <Font type={'heading-16-bold'} color={'gray.800'}>
                    회원가입
                  </Font>
                </Column>
                <Space height={30} />
                <Column gap={25} width={280}>
                  <Column gap={5}>
                    <Row ml={5}>
                      <Font type={'btn-14-bold'} color={'gray.800'}>
                        이메일
                      </Font>
                    </Row>
                    <StyledTextInput placeholder="이메일을 입력해주세요." />
                  </Column>
                  <Column gap={5}>
                    <Row ml={5}>
                      <Font type={'btn-14-bold'} color={'gray.800'}>
                        비밀번호
                      </Font>
                    </Row>
                    <StyledTextInput placeholder="비밀번호를 입력해주세요." />
                  </Column>
                  <Column gap={5}>
                    <Row ml={5}>
                      <Font type={'btn-14-bold'} color={'gray.800'}>
                        이름(선택)
                      </Font>
                    </Row>
                    <StyledTextInput placeholder="이름을 입력해주세요." />
                  </Column>
                  <Column gap={5}>
                    <Row ml={5}>
                      <Font type={'btn-14-bold'} color={'gray.800'}>
                        닉네임
                      </Font>
                    </Row>
                    <StyledTextInput placeholder="닉네임을 입력해주세요." />
                  </Column>
                  <Column gap={10}>
                    <Row ml={5}>
                      <Font type={'btn-14-bold'} color={'gray.800'}>
                        성별(선택)
                      </Font>
                    </Row>
                    <Row align={'center'} gap={20}>
                      <Row gap={5} align={'center'} cursor={'pointer'} onClick={onClickGenderRadio('FEMALE')}>
                        <StyledRadio checked={gender === 'FEMALE'} />
                        <Font type={'btn-12-bold'} color={'gray.700'}>
                          여성
                        </Font>
                      </Row>
                      <Row gap={5} align={'center'} cursor={'pointer'} onClick={onClickGenderRadio('MALE')}>
                        <StyledRadio checked={gender === 'MALE'} />
                        <Font type={'btn-12-bold'} color={'gray.700'}>
                          남성
                        </Font>
                      </Row>
                    </Row>
                  </Column>
                  <Column gap={5}>
                    <Row ml={5}>
                      <Font type={'btn-14-bold'} color={'gray.800'}>
                        전화번호(선택)
                      </Font>
                    </Row>
                    <StyledTextInput placeholder="전화번호을 입력해주세요." />
                  </Column>
                </Column>
                <Row mt={30}>
                  <StyledContainedButton kind={'cta'} size={'lg'}>
                    회원가입하기
                  </StyledContainedButton>
                </Row>
              </Column>
            </Paper>
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

const StyledRadio = styled(Radio)`
  svg {
    width: 18px;
    height: 18px;
  }
`

const StyledContainedButton = styled(ContainedButton)`
  background: #d7c8bd;
`
