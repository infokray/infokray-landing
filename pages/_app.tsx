import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Wrapper from "../components/Wrapper";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Iнфокрай</title>
        <link rel="shortcut icon" href="/favicon.ico" key="shortcutIcon" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="description" content="Iнфокрай" />
      </Head>
      <Wrapper>
        <Navbar />
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;
