import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '../../components/globals/Footer'
import { Navbar } from '../../components/globals/Navbar'
import { Title } from '../../components/globals/Title'

const Hosting: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Hospedagem | CloudConnect</title>
      </Head>
      <Navbar />
      <main>
        <section className="container mx-auto my-[100px]">
          <Title
            title="Escolha o tipo de hospedagem"
            description="Veja quais tipos de hospedagens que podemos oferecer."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
            <button
              className="p-5 bg-white card transition-all shadow-md"
              onClick={() => router.push('/hosting/vps')}
            >
              <div className="swap vps transition-all">
                <strong>Servidores VPS</strong>
              </div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src="/illustration/server.svg"
                  alt="VPS"
                  className="max-w-[250px] h-[217px] w-full"
                />
              </div>
            </button>
            <button
              className="p-5 bg-white card transition-all shadow-md"
              onClick={() => router.push('/hosting/minecraft')}
            >
              <div className="swap minecraft transition-all">
                <strong>Hospedagem de Minecraft</strong>
              </div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src="/minecraft/block/grass.png"
                  alt="Minecraft"
                  className="max-w-[250px] max-h-[217px] w-full h-full"
                />
              </div>
            </button>
            <button
              className="p-5 bg-white card transition-all shadow-md"
              onClick={() => router.push('/hosting/applications')}
            >
              <div className="swap nodejs transition-all">
                <strong>Hospedagem Aplicações</strong>
              </div>
              <div className="flex items-center justify-center w-full mt-10">
                <img
                  src="/nodejs/nodejs.png"
                  alt="VPS"
                  className="max-w-[250px] h-[217px]"
                />
              </div>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Hosting
