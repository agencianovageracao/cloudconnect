import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Sticky from 'react-stickynode'
import { Footer } from '../../components/globals/Footer'
import { IconComponent } from '../../components/globals/Icon'
import { Navbar } from '../../components/globals/Navbar'
import { Title } from '../../components/globals/Title'

const Hosting: NextPage = () => {
  const router = useRouter()

  const plansBr = {
    id: 1,
    title: 'Brasil',
    description: 'São Paulo | SP',
    flag: '/flag/hexagonal/brazil.png',
    machine: {
      cpu: 'Intel Xeon E5-2665',
      internet: '1Gbps',
      clock: '3.6ghz',
      ramType: 'ddr4',
      memoryType: 'ssd'
    },
    plans: [
      {
        ram: 2,
        memory: 35,
        cpu: 2,
        price: 84
      },
      {
        ram: 4,
        memory: 70,
        cpu: 4,
        price: 99
      }
    ]
  }

  const plansUs = {
    id: 2,
    title: 'USA',
    description: 'Manhattan | NY',
    flag: '/flag/hexagonal/united-states.png',
    machine: {
      cpu: 'AMD Ryzen 7',
      internet: '1Gbps',
      clock: '4.4ghz',
      ramType: 'ddr4',
      memoryType: 'ssd'
    },
    plans: [
      {
        ram: 2,
        memory: 35,
        cpu: 2,
        price: 34
      },
      {
        ram: 4,
        memory: 70,
        cpu: 4,
        price: 58
      }
    ]
  }

  const [location, setLocation] = useState(plansBr)
  const [selectedPlan, setSelectedPlan] = useState<{
    ram: number
    memory: number
    cpu: number
    price: number
  } | null>()

  const changeLocation = (loc: string) => {
    if (loc === 'br') {
      setLocation(plansBr)
      setSelectedPlan(null)
    }

    if (loc == 'us') {
      setLocation(plansUs)

      setSelectedPlan(null)
    }
  }

  return (
    <>
      <Head>
        <title>Hospedagem | CloudConnect</title>
      </Head>
      <Navbar />
      <main>
        <section className="my-[100px]">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Title
                title="Servidores VPS"
                description="Veja todos os planos disponíveis de servidores vps"
                type="left"
              />
              <img
                src="/illustration/server.svg"
                className="max-w-sm w-full"
                alt="server"
              />
            </div>
            <div
              className="grid gap-2 mt-[100px]"
              style={{ gridTemplateColumns: '2fr 1fr' }}
            >
              <div className="bg-white p-10 shadow flex flex-col gap-10">
                <div className="bg-gray-100 rounded p-5 ">
                  <h1 className="text-2xl font-bold mb-4">
                    Escolha sua localização
                  </h1>
                  <div className="flex items-center justify-center gap-8">
                    <button
                      className={
                        location.id === 1
                          ? 'max-w-xs w-full bg-white p-5 rounded flex flex-col items-center justify-center border-2 border-blue-500'
                          : 'max-w-xs w-full bg-white p-5 rounded flex flex-col items-center justify-center'
                      }
                      onClick={() => changeLocation('br')}
                    >
                      <img
                        src={plansBr.flag}
                        alt={plansBr.title}
                        className="max-w-[150px]"
                      />
                      <h1 className="mt-2 font-bold text-2xl text-gray-800">
                        {plansBr.title}
                      </h1>
                      <p className="mt-1 text-gray-600">
                        {plansBr.description}
                      </p>
                      <p className="mt-1 text-gray-600">
                        {plansBr.machine.cpu} ({plansBr.machine.clock})
                      </p>
                    </button>
                    <button
                      className={
                        location.id === 2
                          ? 'max-w-xs w-full bg-white p-5 rounded flex flex-col shadow items-center justify-center border-2 border-blue-500'
                          : 'max-w-xs w-full bg-white p-5 rounded flex flex-col shadow items-center justify-center'
                      }
                      onClick={() => changeLocation('us')}
                    >
                      <img
                        src={plansUs.flag}
                        alt={plansUs.title}
                        className="max-w-[150px]"
                      />
                      <h1 className="mt-2 font-bold text-2xl text-gray-800">
                        {plansUs.title}
                      </h1>
                      <p className="mt-1 text-gray-600">
                        {plansUs.description}
                      </p>
                      <p className="mt-1 text-gray-600">
                        {plansUs.machine.cpu} ({plansUs.machine.clock})
                      </p>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded p-5 ">
                  <h1 className="text-2xl font-bold mb-4">Escolha seu plano</h1>
                  <div className="flex flex-col items-center justify-center gap-4">
                    {location.plans.map(plan => {
                      return (
                        <button
                          className={
                            selectedPlan === plan
                              ? 'w-full bg-white p-5 shadow rounded outline outline-2 outline-blue-500'
                              : 'w-full bg-white p-5 shadow rounded'
                          }
                          onClick={() => setSelectedPlan(plan)}
                        >
                          <ul className="flex justify-evenly items-center">
                            <li>
                              <p className="text-xs text-gray-500">
                                Memória RAM
                              </p>
                              <h1 className="font-semibold text-xl">
                                {plan.ram}
                                {'GB '}
                                <span className="text-gray-500 font-normal text-sm uppercase">
                                  {location.machine.ramType}
                                </span>
                              </h1>
                            </li>
                            <li>
                              <p className="text-xs text-gray-500">
                                Armazenamento
                              </p>
                              <h1 className="font-semibold text-xl">
                                {plan.memory}
                                {'GB '}
                                <span className="text-gray-500 font-normal text-sm uppercase">
                                  {location.machine.memoryType}
                                </span>
                              </h1>
                            </li>
                            <li>
                              <p className="text-xs text-gray-500">vCpus</p>
                              <h1 className="font-semibold text-xl">
                                {plan.cpu}{' '}
                                <span className="text-gray-500 font-normal text-sm uppercase">
                                  {location.machine.clock}
                                </span>
                              </h1>
                            </li>
                            <li>
                              <p className="text-xs text-gray-500">Rede</p>
                              <h1 className="font-semibold text-xl">
                                {location.machine.internet}
                              </h1>
                            </li>
                            <li>
                              <p className="text-xs text-gray-500">Preço</p>
                              <h1 className="font-semibold text-xl">
                                R${plan.price},00
                                <span className="text-gray-500 font-normal text-sm">
                                  /mês
                                </span>
                              </h1>
                            </li>
                          </ul>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
              <Sticky enabled={true} top={50} bottomBoundary={1200}>
                <div className="bg-white p-10 shadow">
                  <h1 className="text-2xl font-bold mb-1">Meu plano</h1>
                  <p className="text-gray-400">Detalhes do meu plano</p>
                  <>
                    {selectedPlan ? (
                      <div className="my-6">
                        <div className="flex items-center gap-4">
                          <h1 className="text-xl font-bold">Localização:</h1>
                          <img
                            className="max-w-[50px] w-full"
                            src={location.flag}
                            alt={location.title}
                          />
                        </div>
                        <ul className="flex gap-2 flex-col">
                          <li>
                            <p className="text-xs text-gray-500">Memória RAM</p>
                            <h1 className="font-semibold text-xl">
                              {selectedPlan.ram}
                              {'GB '}
                              <span className="text-gray-500 font-normal text-sm uppercase">
                                {location.machine.ramType}
                              </span>
                            </h1>
                          </li>
                          <li>
                            <p className="text-xs text-gray-500">
                              Armazenamento
                            </p>
                            <h1 className="font-semibold text-xl">
                              {selectedPlan.memory}
                              {'GB '}
                              <span className="text-gray-500 font-normal text-sm uppercase">
                                {location.machine.memoryType}
                              </span>
                            </h1>
                          </li>
                          <li>
                            <p className="text-xs text-gray-500">vCpus</p>
                            <h1 className="font-semibold text-xl">
                              {selectedPlan.cpu}{' '}
                              <span className="text-gray-500 font-normal text-sm uppercase">
                                {location.machine.clock}
                              </span>
                            </h1>
                          </li>
                          <li>
                            <p className="text-xs text-gray-500">Rede</p>
                            <h1 className="font-semibold text-xl">
                              {location.machine.internet}
                            </h1>
                          </li>
                          <li>
                            <p className="text-xs text-gray-500">Preço</p>
                            <h1 className="font-semibold text-xl">
                              R${selectedPlan.price},00
                              <span className="text-gray-500 font-normal text-sm">
                                /mês
                              </span>
                            </h1>
                          </li>
                        </ul>
                        <div>
                          <button className="text-lg w-full mt-6 justify-center flex items-center gap-4 py-3 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
                            <span>Finalizar Compra</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center mt-5">
                        <IconComponent
                          name="Warning"
                          size={70}
                          color="#c9c9c9"
                        />
                        <h1 className="text-gray-400 font-bold">
                          Selecione um plano primeiro
                        </h1>
                      </div>
                    )}
                  </>
                </div>
              </Sticky>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Hosting
