import FormContact from './Form/page'
import Image from 'next/image'
import rocket from '@/assets/icons/rocket.svg'

export default function Contact() {
  return (
    <section className="flex flex-col items-center p-6 lg:px-80">
      <header className="lg:border-emerald-30'0 lg:flex lg:flex-col lg:border">
        <span className="flex gap-3 font-mono text-sm">
          estamos prontos <Image src={rocket} alt="" />
        </span>
        <h1 className="pb-3 pt-1 font-sans text-xl font-bold">
          Podemos falar de negócios?
        </h1>
        <p className="text-sm">
          Estamos prontos para transformar sua visão em realidade digital.
        </p>
      </header>
      <main>
        <FormContact />
      </main>
    </section>
  )
}
