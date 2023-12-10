import { useAppSelector } from '../store'

const SideBar = () => {
  const { genres, show } = useAppSelector(state => state.sidebar)

  return (
    <aside className={`transition-all w-full ${!show && '-translate-x-full'} md:translate-x-0`}>
      <h2 className='font-bold text-3xl mb-4 dark:text-gray-200'>Genres</h2>
      <ul className='flex flex-col gap-2'>
        {genres.map(genre => (
          <li key={genre.title} className=''>
            <button className='flex flex-row gap-4 items-center dark:text-gray-200'>
              <img src={genre.icon} alt='icon' className='w-10 h-10 rounded-lg' />
              {genre.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar
