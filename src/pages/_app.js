import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'

import { AppProvider } from '@/context/appContext'
import { DialogProvider } from '@/context/dialogContext'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <DialogProvider>
          <DefaultSeo
            defaultTitle="Orange Portfólio"
            titleTemplate="%s | Orange Portfólio"
            description="A aquela comunidade vitamidada que você já conhece, mas
            agora com um espacinho especial para você expor seus projetos a
            grandes parceiros."
            openGraph={{
              type: 'website',
              url: 'https://orange-portifolio.vercel.app/',
              title: 'Orange Portfólio',
              description:
                'Um espaço mais que especial e vitaminado para exibir seus projetos!',
              images: [
                {
                  url: '/discover-og.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Plataforma na página de descobrir novos portfólios',
                },
              ],
            }}
          />
          <Component {...pageProps} />
        </DialogProvider>
      </AppProvider>
    </ThemeProvider>
  )
}
