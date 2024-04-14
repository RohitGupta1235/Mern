import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard/user/${username}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
