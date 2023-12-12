import { BiSearch } from 'react-icons/bi'
import DarkModeToggleButton from './DarkModeToggleButton'
import SideBarToggleButton from './SideBarToggleButton'

const Navbar = () => {
  return (
    <nav className='my-4 flex mx-auto flex-row gap-4 items-center justify-between px-4 lg:px-8'>
      <img src='/public/images/favicon/favicon.ico' alt='logo' className='w-8 h-8 lg:w-12 lg:h-12' />
      <form className='flex flex-row items-center gap-4 bg-slate-200 dark:bg-[#333] py-2 px-4 rounded-full w-full'>
        <BiSearch className='dark:text-gray-400' />
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
