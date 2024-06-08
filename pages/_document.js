import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="https://terminal.jup.ag/main-v1.js" data-preload />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
