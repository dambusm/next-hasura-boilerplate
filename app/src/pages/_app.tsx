import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import React from 'react';
import 'water.css/dist/light.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
