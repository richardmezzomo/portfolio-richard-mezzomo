import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'

type SocialMediasProps = {
  spacing: string
}

export default function SocialMedias({ spacing }: SocialMediasProps) {
  return (
    <>
      <ul className={`flex items-center justify-center gap-6 ${spacing}`}>
        <li>
          <a href="https://github.com/richardmezzomo" target="_blank">
            <FaGithubSquare size={30} color="#222222" />
          </a>
        </li>
        <li>
          <a href="">
            <FaWhatsappSquare size={30} color="#222222" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/richardbmezzomo/" target="_blank">
            <FaLinkedin size={30} color="#222222" />
          </a>
        </li>
      </ul>
    </>
  )
}