import { createSlice } from '@reduxjs/toolkit'
import { data } from './data'

const initialState = {
  show: false,
  genres: data
}

const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideBar: state => {
      return {
        ...state,
        show: !state.show
      }
    }
  }
})

export const { toggleSideBar } = sideBarSlice.actions
export default sideBarSlice.reducer
