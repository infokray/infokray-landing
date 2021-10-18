import '../styles/globals.scss'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Wrapper from '../components/Wrapper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

export default MyApp
