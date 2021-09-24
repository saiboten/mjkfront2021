import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../components/Container";
import { HorisontalDraggable } from "../components/HoritontalDraggable";
import { Luke } from "../components/Luke";
import { H1 } from "../components/lib/Heading";
import { Footer } from "../components/Footer";

const Luker = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
  padding: 0 1rem;
`;

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

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Musikkjulekalender.no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledHeader>
        <H1>Musikkjulekalender!</H1>
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

      <Luker>
        <Luke>1</Luke>
        <Luke>2</Luke>
        <Luke>3</Luke>
        <Luke>4</Luke>
        <Luke>5</Luke>
        <Luke>6</Luke>
        <Luke>7</Luke>
        <Luke>8</Luke>
        <Luke>9</Luke>
        <Luke>10</Luke>
        <Luke>11</Luke>
        <Luke>12</Luke>
        <Luke>13</Luke>
        <Luke>14</Luke>
        <Luke>15</Luke>
        <Luke>16</Luke>
        <Luke>17</Luke>
        <Luke>18</Luke>
        <Luke>19</Luke>
        <Luke>20</Luke>
        <Luke>21</Luke>
        <Luke>22</Luke>
        <Luke>23</Luke>
        <Luke>24</Luke>
      </Luker>

      <Footer />
    </Container>
  );
};

export default Home;
