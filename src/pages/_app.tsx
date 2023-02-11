import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Layout } from "@/components/Layout";
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light',
  // theme: {
  //   colors: {...},
  // }
})

const darkTheme = createTheme({
  type: 'dark',
  // theme: {
  //   colors: {...},
  // }
})

export default function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false);
  return (
    <NextThemesProvider
      // defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
      
    >
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
