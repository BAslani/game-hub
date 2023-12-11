import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  games: []
}

const sideBarSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {}
})

export const {} = sideBarSlice.actions
export default sideBarSlice.reducer
