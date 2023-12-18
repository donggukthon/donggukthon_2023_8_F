/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Suspense, useEffect, useState } from 'react'
import { Column } from '../Column'
import ErrorBoundary from '../ErrorBoundary'

const CanvasComponent = React.lazy(() => import('./CanvasComponent'))

export const ThreeElement = (props: any) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Suspense
      fallback={
        <Column width={'100%'} height={500}>
          Loading...
        </Column>
      }
    >
      <ErrorBoundary>
        <CanvasComponent {...props}>{props.children}</CanvasComponent>
      </ErrorBoundary>
    </Suspense>
  )
}
