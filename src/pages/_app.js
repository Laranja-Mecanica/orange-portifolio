import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";
import { Header } from "@/components";

export default function App({ Component, pageProps }) {
  return (

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
