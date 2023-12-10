import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import { useAppSelector } from './store'

const App = () => {
  const { darkMode } = useAppSelector(state => state.darkMode)
  return (
    <div className={`h-full w-full overflow-hidden ${darkMode && 'dark'}`}>
      <div className='h-full overflow-y-auto dark:bg-[#222]'>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
