import { useRouter } from 'next/router'

import * as Icon from 'phosphor-react'

export function Navbar() {
  const router = useRouter()

  return (
    <nav className="py-10">
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
  )
}
