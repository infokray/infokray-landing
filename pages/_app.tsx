import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Wrapper from "../components/Wrapper";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>INFOKRAY</title>
        <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Wrapper>
        <Navbar />
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;
