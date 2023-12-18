import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta httpEquiv="Expire" content="10" />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="나만의 3D 트리" />

          <meta name="robots" content="index,follow" />

          <meta name="application-name" content="동국톤" />
          <meta name="author" content="나만의 3D 트리" />
          <meta name="copyright" content="ghkdwogud852@gmail.com" />
          <meta name="reply-to" content="ghkdwogud852@gmail.com" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>

        <body style={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <noscript>
            자바스크립트가 활성화되어있지 않습니다. 설정을 통해 자바스크립트를 허용하거나 최신 브라우저를 이용해주세요.
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
