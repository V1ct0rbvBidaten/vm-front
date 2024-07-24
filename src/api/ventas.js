import axios from "axios";

export const createVenta = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-venta`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
