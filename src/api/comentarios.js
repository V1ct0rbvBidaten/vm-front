import axios from "axios";

export const createComentario = async (token, id_venta, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/venta/${id_venta}/create-comentario`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getComentarios = async (token, id_venta) => {
  return await axios.get(
    `${import.meta.env.VITE_API_URL}/venta/${id_venta}/comentarios`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteComentario = async (token, id_comentario) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_URL}/comentario/${id_comentario}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
