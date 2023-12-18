import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Font } from '@components/common/Font'
import { Image } from '@components/common/Image'
import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import styled from '@emotion/styled'
import wreathIconImg from 'public/images/wreath_icon.png'
import { FC } from 'react'
import { TERMS_CONTENTS } from '../constants/terms'

type TermsPageProps = {
  className?: string
}

export const TermsPage: FC<TermsPageProps> = ({ className }) => {
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
                    서비스 이용 약관
                  </Font>
                  <Space height={40} />
                  <Paper bgColor={'white'}>
                    <Column p={20}>
                      <Font color={'gray.800'} type={'heading-12-regular'} whiteSpace={'pre-line'}>
                        {TERMS_CONTENTS}
                      </Font>
                    </Column>
                  </Paper>
                </Column>
              </Column>
            </Paper>
          </Column>
        </StyledPaper>
      </Container>
    </Column>
  )
}

const StyledPaper = styled(Paper)``
