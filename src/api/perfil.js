import axios from "axios";

export const getPerfilById = async (token, id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
