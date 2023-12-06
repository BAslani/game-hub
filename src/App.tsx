import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <div className='h-full overflow-y-auto'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
