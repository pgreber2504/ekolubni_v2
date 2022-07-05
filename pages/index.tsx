import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AboutUs from "../sections/AboutUs/AboutUs";
import Contact from "../sections/Contact/Contact";
import Gallery from "../sections/Gallery/Gallery";
import Workshop from "../sections/Workshops/Workshop";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ekolubni - Warsztaty ekologiczne</title>
        <meta name="description" content="Warsztaty ekologiczne dla dzieci" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutUs
          id="section--1"
          title=""
          description="O NAS"
          aboutUsDescription="Zacznij z nami swoją wielką przygodę z ekspozytywnością"
        />
        <Gallery id="section--2" title="" description="GALERIA" />
        <Workshop
          id="section--4"
          title=""
          description="WARSZTATY EKOLOGICZNE"
        />
        <Contact id="section--5" title="" description="KONTAKT" />
      </Layout>
    </>
  );
};

export default Home;
