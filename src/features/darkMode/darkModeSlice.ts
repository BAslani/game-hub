import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false
}

const sideBarSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      return {
        darkMode: !state.darkMode
      }
    }
  }
})

export const { toggleDarkMode } = sideBarSlice.actions
export default sideBarSlice.reducer
