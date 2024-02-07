import Image from 'next/image'
import githubBlog from '@/assets/images/github-blog.png'
import { FaGithubSquare } from 'react-icons/fa'
import arrow from '@/assets/icons/arrow.svg'

export default function Cards() {
  return (
    <section className="lg:flex lg:flex-col">
      <Image src={githubBlog} alt="" />
      <div className="lg:flex lg:items-center lg:justify-between">
        <div>
          <h1 className="font-sans lg:pb-4 lg:pt-6 lg:text-3xl lg:font-bold">
            Github Blog
          </h1>
          <p className="font-sans font-semibold lg:pb-4 lg:text-lg">
            Blog Informativo
          </p>
          <div className="lg:flex lg:gap-16">
            <div>
              <span className="font-sans font-semibold lg:pb-3">Solução</span>
              <p>Site</p>
            </div>
            <div>
              <span className="font-sans font-semibold lg:pb-3">
                Tecnologias
              </span>
              <ul className="lg:flex lg:gap-3">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="lg:flex lg:flex-col lg:gap-6">
            <li>
              <a href="">
                <FaGithubSquare size={25} color="#222222" />
              </a>
            </li>
            <li>
              <a href="">
                <Image src={arrow} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
