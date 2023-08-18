import Head from 'next/head';
import React from 'react'

import HomePage from '../components/home';

const Home = () =>{
  return(
    <>
      <Head>
        <title>Pagina inicial</title>
      </Head>
      <HomePage />
    </>
  )
}

export default Home;