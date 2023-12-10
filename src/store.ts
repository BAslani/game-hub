import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from './features/sideBar/sideBarSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import darkModeReducer from './features/darkMode/darkModeSlice'

const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    darkMode: darkModeReducer
  }
})

export default store
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
