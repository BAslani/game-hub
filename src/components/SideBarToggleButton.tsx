import { FaBars } from 'react-icons/fa'

const SideBarToggleButton = () => {
  return (
    <button className='md:hidden'>
      <FaBars className='text-3xl' />
    </button>
  )
}

export default SideBarToggleButton
