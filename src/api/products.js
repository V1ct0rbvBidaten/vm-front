import axios from "axios";

export const createProducto = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-product`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getProductos = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/products?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
