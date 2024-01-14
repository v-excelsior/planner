import axios from 'axios'

const LOCALHOST = 'http://localhost:3001'
const PROD = 'http://192.168.0.102:3001'

export const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? LOCALHOST : PROD,
})
