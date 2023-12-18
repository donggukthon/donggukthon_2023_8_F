import { Toast } from '@components/common/Toast'
import { theme } from '@components/common/core/theme'
import { ThemeProvider } from '@emotion/react'
import { queryClient } from '@libs/queryClient'
import { WebsiteSnippet } from '@libs/seo'
import '@styles/globals.scss'
import { setUtmCookie } from '@utils/setUtmCookie'
import { Analytics } from '@vercel/analytics/react'
import NextApp, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { DehydratedState, Hydrate, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

type PagePropsType = {
  dehydratedState?: DehydratedState
}

const App = ({ Component, pageProps, router }: AppProps<PagePropsType>) => {
  useEffect(() => {
    setUtmCookie()
  }, [])

  return (
    <React.StrictMode>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <WebsiteSnippet />
      <Toast />
      <Analytics />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps?.dehydratedState}>
            <Component {...pageProps} {...router.query} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const context = await NextApp.getInitialProps(appContext)

  return {
    pageProps: {
      ...context.pageProps,
    },
  }
}

export default App
