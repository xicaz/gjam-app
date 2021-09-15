import api from "./apiConfig";

export const getJams = async () => {
  try {
    const response = await api.get("/jams");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getJam = async (id) => {
  try {
    const response = await api.get(`/jams/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createJam = async (jam) => {
  try {
    const response = await api.post("/jams", jam);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateJam = async (id, jam) => {
  try {
    const response = await api.put(`/jams/${id}`, jam);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteJam = async (id) => {
  try {
    const response = await api.delete(`/jams/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFeaturedJams = async (id) => {
  try {
    const response = await api.get(`/featuredJams`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
