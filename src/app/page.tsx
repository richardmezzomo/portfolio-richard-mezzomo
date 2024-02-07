import About from '@/components/About/page'
import HomeScreen from '@/components/HomeScreen/page'
import Navbar from '@/components/Navbar/page'
import Portfolio from '@/components/Portfolio/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScreen />
      <About />
      <Portfolio />
    </>
  )
}
