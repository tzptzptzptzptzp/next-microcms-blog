import '../styles/globals.css'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
        </Head>
        <AnimatePresence mode='wait'>
          <Component {...pageProps} />
        </AnimatePresence>
      </RecoilRoot>
    </>
  )
}
