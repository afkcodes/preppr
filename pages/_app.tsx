import '../styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

import themes from '../styles/themes';

// eslint-disable-next-line no-unused-vars
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={themes}>
      <Component />
    </NextUIProvider>
  );
}

export default MyApp;
