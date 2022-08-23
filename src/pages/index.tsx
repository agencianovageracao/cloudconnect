import { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/globals/Footer'

import { Comments } from '../components/pages/home/Comments'
import { Header } from '../components/pages/home/Header'
import { Headline } from '../components/pages/home/Headline'
import { Services } from '../components/pages/home/Services'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | CloudConnect</title>
      </Head>
      <Header />
      <body>
        <Headline />
        <Services />
        <Comments />
      </body>
      <Footer />
    </>
  )
}

export default Home
