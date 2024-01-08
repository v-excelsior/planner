import axios from 'axios'

const LOCALHOST = 'http://localhost:3001'
const PROD = 'http://v-excelsior.ddns.net'

export const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? LOCALHOST : PROD,
})
