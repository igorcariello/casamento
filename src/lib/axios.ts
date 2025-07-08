import axios from 'axios'

const token = localStorage.getItem("@casamentoBiaEIago:admin_token")

/*export const api = axios.create({
  baseURL: 'https://backend-casamento.onrender.com',
  headers: {
    Authorization: `Bearer ${token}`
  }
})*/

export const api = axios.create({
  baseURL: 'http://localhost:3334',
  headers: {
    Authorization: `Bearer ${token}`
  }
})