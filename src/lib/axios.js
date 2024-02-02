import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://orange-app-2m9ib.ondigitalocean.app',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  },
})
