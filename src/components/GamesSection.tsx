import { useGamesQuery } from '../store/api'
import GameCard from './GameCard'
import { type Game } from './GameCard'

const GamesSection = () => {
  const { data, isLoading } = useGamesQuery()

  if (isLoading) return <div>Loading...</div>
  const games = data?.results

  return (
    <section className='flex flex-col gap-6 items-center'>
      {games && games.length > 0 ? (
        games.map((game: Game) => {
          return <GameCard key={game.id} game={game} />
        })
      ) : (
        <p>no game found</p>
      )}
    </section>
  )
}

export default GamesSection
