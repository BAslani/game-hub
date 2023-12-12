import { FC } from 'react'
import PlatformList from './PlatformList'

export type Platform = {
  id: number
  name: string
  slug: string
}

export type Game = {
  id: number
  name: string
  background_image: string
  metacritic: number
  parent_platforms: { platform: Platform }[]
  rating_top: number
}

const GameCard: FC<{ game: Game }> = ({ game }) => {
  return (
    <article className='bg-gray-100 dark:bg-[#333] rounded-xl w-80'>
      <img src={game.background_image} alt='game' className='rounded-t-xl w-full' />
      <div className='flex flex-col gap-4 max-w-[90%] mx-auto py-4'>
        <div className='flex w-full justify-between mx-auto'>
          <PlatformList platforms={game.parent_platforms?.map(p => p.platform)} />
          <div className='bg-[#3E5641] rounded px-1'>
            <p className='text-green-300'>{game.metacritic}</p>
          </div>
        </div>
        <h3 className='text-2xl font-bold dark:text-slate-200'>{game.name}</h3>
        {game.rating_top === 5 ? (
          <img src='/public/images/bulls-eye.webp' alt='bulls' className='w-8' />
        ) : (
          <img src='/public/images/thumbs-up.webp' alt='bulls' className='w-8' />
        )}
      </div>
    </article>
  )
}

export default GameCard
