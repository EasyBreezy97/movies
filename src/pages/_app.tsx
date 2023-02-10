import "@/styles/globals.css";
import useSWR, { SWRConfig } from "swr";
import { ThemeProvider } from "@mui/material";
import { theme } from "utils/theme";
import createEmotionCache from "utils/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
