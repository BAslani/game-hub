import { useAppSelector } from '../store'

const SideBar = () => {
  const { genres, show } = useAppSelector(state => state.sidebar)

  return (
    <aside className={`w-screen transition-all max-md:${show ? '-translate-x-full' : 'translate-x-full'}`}>
      <h2 className='font-bold text-3xl mb-4'>Genres</h2>
      <ul className='flex flex-col gap-2'>
        {genres.map(genre => (
          <li key={genre.title} className=''>
            <button className='flex flex-row gap-4 items-center'>
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
