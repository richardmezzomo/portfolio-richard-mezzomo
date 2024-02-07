import Cards from '../Cards/page'

export default function Portfolio() {
  return (
    <section className="px-6 py-5 lg:px-20 lg:py-8">
      <header>
        <h1 className="pb-3 font-sans text-xl font-bold text-black lg:pb-4 lg:text-4xl">
          Projetos
        </h1>
        <p className="font-mono text-sm lg:text-lg">
          alguns dos projetos desenvolvidos
        </p>
      </header>
      <main className="pt-10 lg:grid lg:grid-cols-2 lg:gap-10">
        <Cards />
        <Cards />
        <Cards />
      </main>
    </section>
  )
}
