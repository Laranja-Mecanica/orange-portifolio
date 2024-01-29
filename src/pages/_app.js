import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'

import { AppProvider } from '@/context/appContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}
