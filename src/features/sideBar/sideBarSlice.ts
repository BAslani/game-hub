import { createSlice } from '@reduxjs/toolkit'
import { data } from './data'

const initialState = data

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideBar: () => console.log('hello')
  }
})

export const { toggleSideBar } = sideBarSlice.actions
export default sideBarSlice.reducer
