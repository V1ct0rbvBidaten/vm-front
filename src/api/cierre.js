import axios from "axios";

export const createCierre = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-cierre`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const updateCierre = async (token, body, id) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/update-cierre?id=${id}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getCierres = async (token, body) => {
  let queryParams = new URLSearchParams();

  Object.entries(body).forEach(([key, value]) => {
    if (typeof value === "string" && value.includes(",")) {
      // If the value is a string and contains commas, split it into an array
      value.split(",").forEach((item) => {
        if (item) queryParams.append(key, item.trim());
      });
    } else if (Array.isArray(value)) {
      // If the value is an array, add each item as a separate parameter
      value.forEach((item) => {
        if (item) queryParams.append(key, item);
      });
    } else if (value) {
      // If the value is not an array and is not empty, add it as a parameter
      queryParams.append(key, value);
    }
  });

  // Construct query string
  const queryString = queryParams.toString();

  console.log(queryString);

  return await axios.get(
    `${import.meta.env.VITE_API_URL}/get-cierres?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};
