import Image from 'next/image'

import logo from '@/assets/logo.svg'

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-[#F8F4F0]">
      <header>
        <Image src={logo} alt="logo" width={100} height={100} />
      </header>
      <h1 className="font-sans text-2xl pt-5 text-neutral-800">Hello World!</h1>
      <p className="font-mono text-xl text-neutral-800">
        Em Construção: Aguarde a Versão 2! 🚧
      </p>
    </main>
  )
}
