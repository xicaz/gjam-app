import api from "./apiConfig"
import jwtDecode from "jwt-decode"

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/signin', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('/verify')
    return res.data
  }
  return false
}