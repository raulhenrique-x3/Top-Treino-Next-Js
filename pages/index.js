import Head from "next/head";
import Header from "../components/header/Header";
import Section01 from "../components/section01/Section01";
import Section02 from "../components/section02/Section02";
import Section03 from "../components/section03/Section03";
import Section04 from "../components/section04/Section04";
import Section05 from "../components/section05/Section05";
import Section06 from "../components/section06/Section06";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Academia Top Treino - Vida saudável</title>
        <meta name="description" content="A academia mais barata da região de Cavaleiro!" />
        <meta name="google-site-verification" content="xRK8Fmlx2OrV0hN-K7k9lpxVBnamDLzWrUUXu0wPNxQ" />
        <link rel="icon" href="/topTreinoIcon.png" />
      </Head>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Footer />
    </>
  );
}
