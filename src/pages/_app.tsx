import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "utils/theme";
import createEmotionCache from "utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

interface IApp extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App(props: IApp) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
