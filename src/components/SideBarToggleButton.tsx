import { FaBars } from 'react-icons/fa'
import { useAppDispatch } from '../store'
import { toggleSideBar } from '../features/sideBar/sideBarSlice'

const SideBarToggleButton = () => {
  const dispatch = useAppDispatch()

  return (
    <button className='md:hidden' onClick={() => dispatch(toggleSideBar())}>
      <FaBars className='text-3xl' />
    </button>
  )
}

export default SideBarToggleButton
