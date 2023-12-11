import GameCard from './GameCard'

const GamesSection = () => {
  return (
    <section className='flex flex-col gap-6 items-center'>
      <h1 className='text-5xl font-bold'>Games</h1>
      <GameCard />
    </section>
  )
}

export default GamesSection
