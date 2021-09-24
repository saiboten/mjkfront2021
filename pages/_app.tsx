import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Image from "next/image";
import type { AppProps } from "next/app";
import { HorisontalDraggable } from "../components/HoritontalDraggable";
import { Menu } from "../components/Menu";

const GlobalStyle = createGlobalStyle`

html {
      font-size: 62.5%; // 1 rem == 10px
  }

  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  body {
      box-sizing: border-box;
      background-color: #0b131d;
      /* background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
        url("/static/images/s3.png"); */
      z-index: 1;
      /* animation: ${backgroundSnow} 10s linear infinite; */
      font-family: "Rubik", sans-serif;

      @media screen and (max-width: 45rem) {
        animation: none;
        background-image: none;
      }
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Menu />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
