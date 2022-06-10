import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AboutUs from "../sections/AboutUs/AboutUs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ekolubni - Warsztaty ekologiczne</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AboutUs
          title=""
          description="O NAS"
          aboutUsDescription="Zacznij z nami swoją wielką przygodę z ekspozytywnością"
        />
      </Layout>
    </>
  );
};

export default Home;
