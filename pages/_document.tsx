import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const faviconPath = 'favicon'
    return (
      <Html lang='ja'>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href={`${faviconPath}/favicon-16x16.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${faviconPath}/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`${faviconPath}/android-icon-192x192.png`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${faviconPath}/apple-icon-180x180.png`} />
          <link rel="manifest" href={`${faviconPath}/manifest.json`} />

          <meta name="msapplication-TileImage" content={`${faviconPath}/ms-icon-144x144.png`} />
          <meta name="msapplication-TileColor" content="#fed54d" />
          <meta name="theme-color" content="#fed54d" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument