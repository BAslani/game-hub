import { useState } from 'react'

const DarkModeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className='min-w-fit flex items-center gap-2'>
      <button
        className='relative bg-gray-200 w-10 h-5 rounded-full shadow-[inset_0_0_4px_rgba(0,0,0,0.4)] '
        onClick={() => setDarkMode(!darkMode)}
      >
        <i
          className={`absolute top-[2.5px] left-1 transition-all duration-200 ${
            darkMode && 'translate-x-4'
          } shadow rounded-full bg-white w-4 h-4`}
        ></i>
      </button>
      Dark Mode
    </div>
  )
}

export default DarkModeToggleButton
