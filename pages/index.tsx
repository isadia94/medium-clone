import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";

<link href="https://fonts.googleapis.com/css2?family=Oranienbaum&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
    </div>
  );
};

export default Home;
