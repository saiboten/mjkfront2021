import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Image from "next/image";
import type { AppProps } from "next/app";
import { HorisontalDraggable } from "../components/HoritontalDraggable";

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
      background-color: "#0b131d";
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

const StyledSanta = styled.div`
  height: 30rem;
  margin: 0 auto;

  @media screen and (max-width: 45rem) {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;

const StyledHeader = styled.div`
  text-align: left;
  padding-top: 1rem;
  color: #fff;
  display: flex;

  @media screen and (max-width: 45rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    background-image: url("/static/images/s1.png"), url("/static/images/s2.png"),
      url("/static/images/s3.png");
    z-index: 1;
    /* animation: ${backgroundSnow} 10s linear infinite; */
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledHeader>
          <h1>Musikkjulekalender!</h1>
          <HorisontalDraggable>
            <StyledSanta>
              <Image
                src="/images/julenissetransparent.png"
                alt="Julenisse"
                height="300px"
                width="300px"
                draggable={false}
              />
            </StyledSanta>
          </HorisontalDraggable>
        </StyledHeader>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
