import api from "./apiConfig"

export const getJams = async () => {
  try {
    const response = await api.get("/jams")
    return response.data
  } catch (error) {
    throw error
  }
}
