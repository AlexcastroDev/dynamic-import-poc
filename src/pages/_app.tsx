import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import NextApp, { AppContext, AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
