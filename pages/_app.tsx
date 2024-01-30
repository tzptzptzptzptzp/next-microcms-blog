import Head from "next/head";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head children={undefined}></Head>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>
  );
}
