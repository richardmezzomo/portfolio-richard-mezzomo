import FormContact from './FormContact/page'
import Image from 'next/image'
import rocket from '@/assets/icons/rocket.svg'

export default function Contact() {
  return (
    <section className="flex flex-col items-center p-6 lg:px-80">
      <header className="lg:flex lg:flex-col">
        <span className="flex gap-3 font-mono text-sm lg:text-lg">
          estamos prontos <Image src={rocket} alt="" />
        </span>
        <h1 className="pb-3 pt-1 font-sans text-xl font-bold lg:text-[40px]">
          Podemos falar de negócios?
        </h1>
        <p className="text-sm lg:text-lg">
          Estamos prontos para transformar sua visão em realidade digital.
        </p>
      </header>
      <main>
        <FormContact />
      </main>
    </section>
  )
}
