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
    }),
    genres: builder.query<any, void>({
      query: () => ({
        url: '/genres',
        method: 'GET'
      })
    })
  })
})

export const { useGamesQuery, useGenresQuery } = gamesApi
export default gamesApi
