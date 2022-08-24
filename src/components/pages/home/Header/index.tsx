import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { IconComponent } from '../../../globals/Icon'

import { Navbar } from '../../../globals/Navbar'

export const Header: NextPage = () => {
  const router = useRouter()

  return (
    <header>
      <Navbar />
      <div className="container mx-auto mt-20 flex flex-col lg:flex-row text-center lg:text-left justify-center items-center lg:justify-between">
        <div className="max-w-[650px] w-full lg:block flex flex-col items-center justify-center">
          <h1 className="font-nova text-5xl lg:text-[56px]">
            O <span className="text-blue-500">futuro</span> do seu servidor{' '}
            <span className="text-blue-500">começa</span> aqui!
          </h1>
          <p className="text-lg mt-4">
            Combina a alta performance de servidores potentes com o que há de
            mais sofisticado em inteligência artifical para hospedagem. Não é
            diamante, é CloudConnect, é brilhante.
          </p>
          <button
            onClick={() => router.push('/hosting')}
            className="mt-6 text-lg flex items-center gap-4 py-3 px-5 bg-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80 group"
          >
            <span>Conheça nossos produtos</span>
            <div className="group-hover:translate-x-2 transition-all">
              <IconComponent name="ArrowRight" size={24} color="#fff" />
            </div>
          </button>
        </div>
        <div className="max-w-[650px] w-full hidden lg:block">
          <Image
            src="/illustration/server.svg"
            width={650}
            height={245}
            layout="responsive"
            priority={true}
          />
        </div>
      </div>
    </header>
  )
}
