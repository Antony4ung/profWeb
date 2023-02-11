import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Layout } from "@/components/Layout";

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
  return (
    <NextThemesProvider
      // defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
      
    >
      <NextUIProvider theme={true ? darkTheme : lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}
