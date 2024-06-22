import axios from "axios";

export const createMovimientos = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-movimientos`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getMovimientos = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/get-movimientos?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};
