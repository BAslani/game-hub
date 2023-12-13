import { useAppSelector } from '../store'
import { useGenresQuery } from '../store/api'
import LoadingSpinner from './LoadingSpinner'

type Genre = {
  id: number
  image_background: string
  name: string
  slug: string
}

const SideBar = () => {
  const { show } = useAppSelector(state => state.sidebar)
  const { data, isLoading } = useGenresQuery()
  const genres = data?.results

  if (isLoading) return <LoadingSpinner />

  return (
    <aside
      className={`transition-all max-md:w-full ${
        !show && '-translate-x-full'
      } max-md:absolute z-10 bg-white dark:bg-[#222] md:translate-x-0`}
    >
      <h2 className='font-bold text-3xl mb-4 dark:text-gray-200'>Genres</h2>
      <ul className='flex flex-col gap-3'>
        {genres.map((genre: Genre) => (
          <li key={genre.id} className='w-fit'>
            <button className='flex flex-row gap-4 items-center dark:text-gray-200'>
              <img src={genre.image_background} alt='icon' className='w-10 h-10 rounded-lg' />
              <p className='whitespace-nowrap'>{genre.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar
