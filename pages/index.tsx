import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Luke } from "../components/Luke";

const Luker = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Musikkjulekalender.no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Musikkjulekalender.no</h1>
      </main>

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

      <footer>Tobias Rusås Olsen</footer>
    </Container>
  );
};

export default Home;
