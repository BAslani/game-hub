import { useGamesQuery } from '../store/api'
import GameCard from './GameCard'
import { type Game } from './GameCard'
import SkeletonLoadingSection from './SkeletonLoadingSection'

const GamesSection = () => {
  const { data, isLoading } = useGamesQuery()

  if (isLoading) return <SkeletonLoadingSection />
  const games = data?.results

  return (
    <section className='flex flex-col gap-4 dark:text-slate-200'>
      <h1 className='text-2xl md:text-5xl font-bold text-center md:text-left'>Games</h1>
      <div className='flex flex-col gap-6 items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
        {games && games.length > 0 ? (
          games.map((game: Game) => {
            return <GameCard key={game.id} game={game} />
          })
        ) : (
          <p>no game found</p>
        )}
      </div>
    </section>
  )
}

export default GamesSection
