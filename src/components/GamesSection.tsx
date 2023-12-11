import { useGamesQuery } from '../store/api'
import GameCard from './GameCard'

const GamesSection = () => {
  const { error, data: games, isLoading } = useGamesQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error occurred: {error?.message || 'Unknown error'}</div>

  return (
    <section className='flex flex-col gap-6 items-center'>
      <h1 className='text-5xl font-bold'>Games</h1>
      {games && games.length > 0 ? (
        games.map(game => {
          return <GameCard key={game.id} game={game} />
        })
      ) : (
        <p>no game found</p>
      )}
    </section>
  )
}

export default GamesSection
