import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const Footer: NextPage = () => {
  const router = useRouter()

  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <img
            src="/brand/logo.png"
            className="max-w-[400px]"
            alt="Logo"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl">Já é cliente?</h1>
          <ul className="mt-5">
            <li>
              <button
                className="text-lg font-nova transition-all hover:text-blue-500"
                onClick={() => router.push('/')}
              >
                <span>Central do cliente</span>
              </button>
            </li>
            <li>
              <button
                className="text-lg font-nova transition-all hover:text-blue-500"
                onClick={() => router.push('/discord')}
              >
                <span>Discord</span>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Links úteis</h1>
          <ul className="mt-5">
            <li>
              <button
                className="text-lg font-nova transition-all hover:text-blue-500"
                onClick={() => router.push('/')}
              >
                <span>Início</span>
              </button>
            </li>
            <li>
              <button
                className="text-lg font-nova transition-all hover:text-blue-500"
                onClick={() => router.push('/hosting/minecraft')}
              >
                <span>Hospedagem minecraft</span>
              </button>
            </li>
            <li>
              <button
                className="text-lg font-nova transition-all hover:text-blue-500"
                onClick={() => router.push('/hosting/vps')}
              >
                <span>VPS BR</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="text-2xl font-bold mt-10">
          Todos os direitos reservados ₢ <span>CloudConnect</span> 2022.
        </p>
        <a href="#">Desenvolvido com muito ❤️ por AtomCodes</a>
      </div>
    </footer>
  )
}
