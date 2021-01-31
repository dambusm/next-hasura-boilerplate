import { Provider as NextAuthProvider } from 'next-auth/client';
import { AppProps } from 'next/app';
import React from 'react';
import 'water.css/dist/light.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}
