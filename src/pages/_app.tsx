import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import theme from '../../styles/theme';

// eslint-disable-next-line no-unused-vars
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component />
    </ChakraProvider>
  );
}

export default MyApp;
