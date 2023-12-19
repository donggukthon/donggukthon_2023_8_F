import { RESTORE_DELAY } from '@constants/restore'
import styled from '@emotion/styled'
import fallbackThumbnailImg from 'public/images/fallback_thumbnail.png'
import React, { ErrorInfo, ReactNode } from 'react'
import { Image } from '../Image'
import { Paper } from '../Paper'
import { Position } from '../Position'
import { Row } from '../Row'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // 에러 발생 후 N초 후에 상태를 리셋하여 자동으로 다시 시도하게 함
    setTimeout(() => {
      this.setState({ hasError: false })
    }, RESTORE_DELAY)
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledPosition position={'fixed'} top={0} left={0}>
          <Paper bgColor={'temp.#AA9788'}>
            <Row width={'100vw'} height={'100vh'} overflow={'hidden'} p={20} justify={'center'} align={'center'}>
              <StyledImage
                src={fallbackThumbnailImg}
                alt={'fallback thumbnail image'}
                width={400}
                height={400}
                background={false}
              />
            </Row>
          </Paper>
        </StyledPosition>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

const StyledImage = styled(Image)`
  img {
    width: auto;
    height: 400px;
    object-fit: contain;
    border-radius: 12px;
    margin-top: -50px;
    z-index: 5;
  }
`

const StyledPosition = styled(Position)`
  z-index: 999;
`
