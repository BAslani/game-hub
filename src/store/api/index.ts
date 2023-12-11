import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './axiosBaseQuery'

const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    games: builder.query<any, void>({
      query: () => ({
        url: '/games',
        method: 'GET'
      })
    })
  })
})

export const { useGamesQuery } = gamesApi
export default gamesApi
