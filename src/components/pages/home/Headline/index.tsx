import { NextPage } from 'next'
import { IconComponent } from '../../../globals/Icon'

export const Headline: NextPage = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <div className="flex items-center gap-5 justify-between">
          <div className="bg-white shadow-sm px-8 py-12 rounded flex items-center justify-center gap-7">
            <div>
              <IconComponent name="Cpu" size={132} color="#465CFD" />
            </div>
            <div>
              <h1 className="text-2xl uppercase font-bold text-blue-500">
                HARDWARE DE ALTA PERFORMANCE
              </h1>
              <p>
                Os nossos processadores vão garantir alto desempenho pra o seu
                servidor. Nossa host de minecraft de alta performance vai te
                impressionar!
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm px-8 py-12 rounded flex items-center justify-center gap-7">
            <div>
              <IconComponent name="Cpu" size={132} color="#465CFD" />
            </div>
            <div>
              <h1 className="text-2xl uppercase font-bold text-blue-500">
                HARDWARE DE ALTA PERFORMANCE
              </h1>
              <p>
                Os nossos processadores vão garantir alto desempenho pra o seu
                servidor. Nossa host de minecraft de alta performance vai te
                impressionar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
