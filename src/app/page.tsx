import Image from 'next/image'

import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <header>
        <Image src={logo} alt="logo" width={100} height={100} />
      </header>
      <h1 className="pt-5 font-sans text-2xl text-black">Hello World!</h1>
      <p className="font-mono text-xl text-black">
        Em Construção: Aguarde a Versão 2! 🚧
      </p>
    </main>
  )
}
