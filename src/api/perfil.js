import axios from "axios";

export const getPerfilById = async (token, id) => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPerfiles = async (token, body) => {
  let queryParams = new URLSearchParams();

  Object.entries(body).forEach(([key, value]) => {
    if (typeof value === "string" && value.includes(",")) {
      value.split(",").forEach((item) => {
        if (item) queryParams.append(key, item.trim());
      });
    } else if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item) queryParams.append(key, item);
      });
    } else if (value) {
      queryParams.append(key, value);
    }
  });

  const queryString = queryParams.toString();

  console.log(queryString);

  return await axios.get(
    `${import.meta.env.VITE_API_URL}/profiles?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updatePerfil = async (token, body, id) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/profile/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
