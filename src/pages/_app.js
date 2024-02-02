import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'

import { AppProvider } from '@/context/appContext'
import { DialogProvider } from '@/context/dialogContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <DialogProvider>
          <Component {...pageProps} />
        </DialogProvider>
      </AppProvider>
    </ThemeProvider>
  )
}
