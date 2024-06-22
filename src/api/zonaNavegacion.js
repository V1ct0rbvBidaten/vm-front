import axios from "axios";

export const createZonaNavegacion = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-zona-navegacion`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const updateZonaNavegacion = async (token, body, id) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/update-zona-navegacion?id=${id}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getZonaNavegaciones = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/get-zonas?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};
