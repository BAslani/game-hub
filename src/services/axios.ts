import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '032b9c1d86af4fef8bf7ff310b4a2fca'
  }
})

export default api
