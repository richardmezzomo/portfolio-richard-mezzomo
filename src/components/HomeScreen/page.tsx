export default function HomeScreen() {
  return (
    <>
      <section className="absolute -z-10 mt-12 h-screen w-full bg-white text-black lg:mt-20">
        <main className="px-6 pt-14">
          <span className="mb-2 font-mono text-sm">olá, meu nome é</span>
          <h1 className="mb-2 font-sans text-4xl font-bold">
            Richard Mezzomo.
          </h1>
          <h2 className="mb-2 font-sans text-4xl font-bold">
            Transformo ideias em código.
          </h2>
          <p className="fonst-sans text-sm">
            Desenvolvedor focado em criar experiências digitais, especialmente
            no desenvolvimento web.
            <br />
            Busco construir produtos rápidos, escaláveis e centrados na
            experiência do usuário.
          </p>

          <div className="flex w-full items-center justify-center pt-14">
            <a
              href=""
              className="border border-black px-3 py-2 font-mono text-sm"
            >
              ENTRE EM CONTATO
            </a>
          </div>
        </main>
      </section>
    </>
  )
}
