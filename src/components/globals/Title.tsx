import { NextPage } from 'next'

type TitleProps = {
  title: string
  description: string
}

export const Title: NextPage<TitleProps> = props => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-blue-500 font-bold text-5xl">{props.title}</h1>
      <p className="px-5 py-2 bg-white rounded-xl shadow-md text-lg font-bold text-gray-700 mt-5">
        {props.description}
      </p>
    </div>
  )
}
