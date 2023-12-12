import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import api from '../../services/axios'
import type { AxiosError, AxiosRequestConfig } from 'axios'

const axiosBaseQuery =
  (): BaseQueryFn<{
    url: string
    method: AxiosRequestConfig['method']
  }> =>
  async ({ url, method }) => {
    try {
      const result = await api({ url, method })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }

export default axiosBaseQuery
