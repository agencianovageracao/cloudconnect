import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import * as Icon from 'phosphor-react'

export const Navbar: NextPage = () => {
  const router = useRouter()

  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleNav = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false)
    }

    if (!isNavbarOpen) {
      setIsNavbarOpen(true)
    }
  }

  return (
    <>
      <nav className="py-10 hidden lg:block">
        <div className="container mx-auto flex justify-between">
          <button onClick={() => router.push('/')}>
            <img src="/brand/logo.png" alt="logo" className="max-w-xs" />
          </button>
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-8">
              <li>
                <button
                  className="flex items-center gap-2 text-lg font-nova transition-all hover:text-blue-500"
                  onClick={() => router.push('/')}
                >
                  <Icon.House size={24} />
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 text-lg font-nova transition-all hover:text-blue-500"
                  onClick={() => router.push('/hosting')}
                >
                  <Icon.GameController size={24} />
                  <span>Hospedagem</span>
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 text-lg font-nova transition-all hover:text-blue-500"
                  onClick={() => router.push('/aboutus')}
                >
                  <Icon.Buildings size={24} />
                  <span>Sobre Nós</span>
                </button>
              </li>
            </ul>
            <div>
              <button className="text-lg flex items-center gap-4 py-3 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
                <Icon.UserGear size={24} />
                <span>Central do cliente</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="py-2 block lg:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => router.push('/')}>
            <img
              src="/brand/favicon.png"
              alt="logo"
              className="max-w-[150px]"
            />
          </button>
          <div>
            <button onClick={() => toggleNav()}>
              <Icon.List size={50} />
            </button>
          </div>
        </div>
        <div
          className={
            isNavbarOpen
              ? 'block fixed w-full h-full bg-white left-0 top-0 bottom-0 right-0 z-50'
              : 'hidden'
          }
        >
          <div className="container mx-auto flex justify-between items-center">
            <button onClick={() => router.push('/')}>
              <img
                src="/brand/favicon.png"
                alt="logo"
                className="max-w-[150px]"
              />
            </button>
            <div>
              <button onClick={() => toggleNav()}>
                <Icon.X size={50} />
              </button>
            </div>
          </div>
          <div className="container mx-auto">
            <ul className="flex flex-col gap-8">
              <li className="w-full bg-gray-100 p-5">
                <button
                  className="flex items-center font-bold gap-2 text-2xl text-gray-700 font-nova transition-all hover:text-blue-500"
                  onClick={() => router.push('/')}
                >
                  <Icon.House size={24} weight="bold" />
                  <span>Início</span>
                </button>
              </li>
              <li className="w-full bg-gray-100 p-5">
                <button
                  className="flex items-center font-bold gap-2 text-2xl text-gray-700 font-nova transition-all hover:text-blue-500"
                  onClick={() => router.push('/hosting')}
                >
                  <Icon.GameController size={24} weight="bold" />
                  <span>Hospedagem</span>
                </button>
              </li>
              <li className="w-full bg-gray-100 p-5">
                <button
                  className="flex items-center font-bold gap-2 text-2xl text-gray-700 font-nova transition-all hover:text-blue-500"
                  onClick={() => router.push('/aboutus')}
                >
                  <Icon.Buildings size={24} weight="bold" />
                  <span>Sobre Nós</span>
                </button>
              </li>
              <li className="w-full">
                <button className="text-lg w-full text-center justify-center h-16 flex items-center gap-4 py-3 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase font-bold rounded-lg transition-all hover:bg-opacity-80">
                  <Icon.UserGear size={24} />
                  <span>Central do cliente</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
