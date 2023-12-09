import { BiSearch } from 'react-icons/bi'
import DarkModeToggleButton from './DarkModeToggleButton'
import SideBarToggleButton from './SideBarToggleButton'

const Navbar = () => {
  return (
    <nav className='my-4 flex mx-auto flex-row gap-4 items-center max-w-7xl justify-between px-4 lg:px-8'>
      <img src='/public/images/favicon.ico' alt='logo' className='w-8 h-8 lg:w-12 lg:h-12' />
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
      <DarkModeToggleButton />
      <SideBarToggleButton />
    </nav>
  )
}

export default Navbar
