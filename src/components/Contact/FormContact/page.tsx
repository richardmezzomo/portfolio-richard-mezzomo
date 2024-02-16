export default function FormContact() {
  return (
    <form className="flex w-full flex-col items-center justify-center gap-10">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="text" placeholder="Assunto" />
      <textarea placeholder="Mensagem"></textarea>
      <button>Enviar</button>
    </form>
  )
}
