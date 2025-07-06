import axios from 'axios'

const token = localStorage.getItem("@casamentoBiaEIago:admin_token")

export const api = axios.create({
  baseURL: 'https://backend-casamento.onrender.com', // <-- Substitua pela URL REAL do seu backend no Render
  headers: {
    Authorization: `Bearer ${token}`
  }
})