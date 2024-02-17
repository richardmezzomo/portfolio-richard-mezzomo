'use client'
import React, { useState } from 'react'

export default function FormContact(): JSX.Element {
  const [nameIsActive, setNameIsActive] = useState<boolean>(false)
  const [emailIsActive, setEmailIsActive] = useState<boolean>(false)

  const handleNameFocus = (): void => {
    setNameIsActive(true)
  }

  const handleNameBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (!event.target.value) {
      setNameIsActive(false)
    }
  }

  const handleEmailFocus = (): void => {
    setEmailIsActive(true)
  }

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (!event.target.value) {
      setEmailIsActive(false)
    }
  }

  return (
    <div>
      <form className="flex flex-col items-center">
        <div className="relative z-0 mb-9 mt-5 w-full">
          <input
            type="text"
            className="block w-full border-b border-b-black bg-transparent px-0 py-2.5 text-sm"
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
          />
          <label
            className={`absolute top-3 -z-10 origin-[0] text-sm transition-all ${
              nameIsActive
                ? 'text-gray-500 -translate-y-6 scale-75'
                : 'translate-y-1 text-gray'
            }`}
          >
            Seu nome
          </label>
        </div>
        <div className="relative z-0 mb-9 mt-5 w-full ">
          <input
            type="email"
            className="block w-full border-b border-b-black bg-transparent px-0 py-2.5 text-sm"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
          <label
            className={`absolute top-3 -z-10 origin-[0] text-sm transition-all ${
              emailIsActive
                ? 'text-gray-500 -translate-y-6 scale-75'
                : 'translate-y-1 text-gray'
            }`}
          >
            Seu e-mail
          </label>
        </div>
        <textarea
          placeholder="Sua mensagem"
          className="h-44 w-full resize-none border border-black p-1 text-sm placeholder:text-sm"
        ></textarea>
        <input
          type="submit"
          value="Enviar Mensagem"
          className="mt-10 cursor-pointer border border-black px-4 py-2 font-mono"
        />
      </form>
    </div>
  )
}
