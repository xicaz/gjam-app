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

<<<<<<< HEAD
export const createJam = async (jam) => {
  try {
    const response = await api.post("/jams", jam);
    return response.data;
  } catch (error) {
    throw error;
  }
};
=======


>>>>>>> 4e0e1357dfa711b6e5ae2cdf5748020a654e665e
