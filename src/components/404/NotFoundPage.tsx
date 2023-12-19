import { Column } from '@components/common/Column'
import { Container } from '@components/common/Container'
import { Image } from '@components/common/Image'
import { Link } from '@components/common/Link'
import { Paper } from '@components/common/Paper'
import { Position } from '@components/common/Position'
import styled from '@emotion/styled'
import errorBackgroundImg from 'public/images/error_background.png'
import { FC } from 'react'

type NotFoundPageProps = {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  return (
    <Position position={'relative'}>
      <Column className={className}>
        <Container size={'sm'}>
          <Link href="/">
            <StyledPaper bgColor={'white'} minHeight={'100vh'}>
              <StyledImage src={errorBackgroundImg} alt={'error background Image'} width={400} height={400} />
            </StyledPaper>
          </Link>
        </Container>
      </Column>
    </Position>
  )
}

const StyledPaper = styled(Paper)`
  /* background: linear-gradient(179.99deg, #997052 0.01%, rgba(187, 152, 127, 0) 113.53%); */
`

const StyledImage = styled(Image)`
  img {
    width: auto;
    height: 100vh;
  }
`
