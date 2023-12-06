import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='my-4 flex mx-auto flex-row gap-4 items-center max-w-7xl justify-between'>
      <div className='w-12 h-12'>
        <img src='/public/images/favicon.ico' alt='' />
      </div>
      <form className='flex flex-row items-center gap-4 bg-slate-200 py-2 px-2 rounded-full w-full'>
        <BiSearch />
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search games...'
          className='bg-transparent outline-none'
        />
      </form>
      <div>dark mode</div>
    </nav>
  )
}

export default Navbar
