import { RESTORE_DELAY } from '@constants/restore'
import React, { ErrorInfo, ReactNode } from 'react'

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
      return <h2>3D 모델을 출력하는데 문제가 발생했습니다. 잠시 후 자동으로 다시 시도합니다...</h2>
    }

    return this.props.children
  }
}

export default ErrorBoundary
