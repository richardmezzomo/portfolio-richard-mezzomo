import Image from 'next/image'
import profile from '@/assets/images/profile-pic.svg'
import SocialMedias from '../SocialMedias/page'

export default function About() {
  return (
    <>
      <section className="h-screen px-6 py-6 lg:px-20 lg:py-11">
        <header>
          <span>CARROUSEL</span>
        </header>
        <main className="pt-10 sm:flex sm:items-center sm:justify-between sm:gap-8 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:pt-14">
          <div>
            <h1 className="pb-3 font-sans text-xl font-bold text-black lg:pb-6 lg:text-4xl">
              Sobre mim
            </h1>
            <div className="flex flex-col gap-3 font-sans text-sm text-black sm:max-w-sm lg:max-w-xl">
              <p>
                Desenvolvedor e entusiasta da tecnologia, atualmente cursando
                Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Apaixonado por desenvolvimento, estou em busca de oportunidades
                para aplicar e aprimorar meu conhecimento.
              </p>
              <p>
                Interessado nos vieses cognitivos no design para aprimorar a
                experiência do usuário.
              </p>
              <p>
                Com expertise nas principais linguagens e frameworks como
                JavaScript, TypeScript, Next, React, Node, Tailwind,
                Styled-components, Shadcn/UI, estou preparado para contribuir em
                projetos inovadores.
              </p>
              <p>
                Busco novos desafios e aprendizado em um ambiente que
                proporcione isso.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-6">
            <Image src={profile} alt="foto de Richard Mezzomo" />
            <SocialMedias spacing="pt-10 pb-6 lg:pt-6" />
          </div>
        </main>
      </section>
    </>
  )
}
