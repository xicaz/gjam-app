import api from "./apiConfig"

export const getJams = async () => {
  try {
    const response = await api.get("/jams")
    return response.data
  } catch (error) {
    throw error
  }
}

export const createJam = async jam => {
  try {
    const response = await api.post('/jams', jam)
    return response.data
  } catch (error) {
    throw error
  } 
}