import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Slider from 'react-slick'
import { IconComponent } from '../../../globals/Icon'
import { Title } from '../../../globals/Title'

export const Services: NextPage = () => {
  const router = useRouter()

  return (
    <section className="my-[150px]">
      <div className="container mx-auto">
        <Title
          title="Nossos Serviços"
          description="Veja todos os serviços que nós podemos oferecer."
        />
        <Slider
          dots={true}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className="mt-10"
        >
          <div className="p-10 bg-white rounded shadow-sm mb-5">
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <h1 className="font-nova text-4xl uppercase text-blue-500">
                  Hospedagem minecraft US
                </h1>
                <p className="text-lg mt-4">
                  Com um processador de última geração e suporte de qualidade,
                  temos as hospedagens minecraft US.
                </p>
                <p className="mt-5">A partir de</p>
                <p className="flex items-end mb-5">
                  <span className="text-sm font-bold">R$</span>
                  <h1 className="text-2xl font-bold text-blue-500">6,00</h1>
                  <span className="text-sm font-bold">/mês</span>
                </p>
                <button
                  onClick={() => router.push('/hosting/minecraft')}
                  className="mt-6 text-lg flex items-center gap-4 py-3 px-5 bg-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80 group"
                >
                  <span>Veja todos os planos</span>
                  <IconComponent name="ArrowRight" size={24} color="#fff" />
                </button>
              </div>
              <div className="w-1/2 h-full flex justify-end">
                <img
                  src="/illustration/island.webp"
                  alt="Island"
                  className="max-h-[400px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="p-10 bg-white rounded shadow-sm mb-5">
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <h1 className="font-nova text-4xl uppercase text-blue-500">
                  Hospedagem minecraft BR
                </h1>
                <p className="text-lg mt-4">
                  Com um processador de última geração e suporte de qualidade,
                  temos as hospedagens minecraft BR.
                </p>
                <p className="mt-5">A partir de</p>
                <p className="flex items-end mb-5">
                  <span className="text-sm font-bold">R$</span>
                  <h1 className="text-2xl font-bold text-blue-500">9,40</h1>
                  <span className="text-sm font-bold">/mês</span>
                </p>
                <button
                  onClick={() => router.push('/hosting/minecraft')}
                  className="mt-6 text-lg flex items-center gap-4 py-3 px-5 bg-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80 group"
                >
                  <span>Veja todos os planos</span>
                  <IconComponent name="ArrowRight" size={24} color="#fff" />
                </button>
              </div>
              <div className="w-1/2 h-full flex justify-end">
                <img
                  src="/illustration/island.webp"
                  alt="Island"
                  className="max-h-[400px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="p-10 bg-white rounded shadow-sm mb-5">
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <h1 className="font-nova text-4xl uppercase text-blue-500">
                  VPS BR
                </h1>
                <p className="text-lg mt-4">
                  Com um processador de última geração, clocks de alta
                  performance e um anti-ddos incrível.
                </p>
                <p className="mt-5">A partir de</p>
                <p className="flex items-end mb-5">
                  <span className="text-sm font-bold">R$</span>
                  <h1 className="text-2xl font-bold text-blue-500">34,00</h1>
                  <span className="text-sm font-bold">/mês</span>
                </p>
                <button
                  onClick={() => router.push('/hosting/minecraft')}
                  className="mt-6 text-lg flex items-center gap-4 py-3 px-5 bg-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80 group"
                >
                  <span>Veja todos os planos</span>
                  <IconComponent name="ArrowRight" size={24} color="#fff" />
                </button>
              </div>
              <div className="w-1/2 h-full flex justify-end">
                <img
                  src="/illustration/server.svg"
                  alt="Island"
                  className="max-h-[400px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
