export default function FormContact() {
  return (
    <form className="flex flex-col items-center border border-black">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="text" placeholder="Assunto" />
      <textarea placeholder="Mensagem"></textarea>
      <button>Enviar</button>
    </form>
  )
}
