import GamesSection from '../components/GamesSection'
import SideBar from '../components/SideBar'

const HomePage = () => {
  return (
    <main className='flex flex-col gap-8 md:flex-row md:gap-8 px-4 lg:px-8'>
      <SideBar />
      <GamesSection />
    </main>
  )
}

export default HomePage
