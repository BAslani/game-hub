import { configureStore } from '@reduxjs/toolkit'
import sideBarSlice from './slices/sideBar/sideBarSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import darkModeSlice from './slices/darkModeSlice'
import gamesApi from './api'
import gamesSlice from './slices/gamesSlice'

const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    darkMode: darkModeSlice,
    games: gamesSlice,
    [gamesApi.reducerPath]: gamesApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([gamesApi.middleware, gamesApi.middleware])
})

export default store
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
