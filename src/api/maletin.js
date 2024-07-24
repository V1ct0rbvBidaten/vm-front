import axios from "axios";

export const createMaletin = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-maletin`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateMaletin = async (token, body, maletin_id) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/update-maletin/${maletin_id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMaletines = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/maletines?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getMaletinProducts = async (token, maletin_id, body) => {
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
    `${import.meta.env.VITE_API_URL}/maletin/${maletin_id}?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getProductInMaletin = async (token, maletin_id, product_id) => {
  return await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/product-in-maletin/${maletin_id}/${product_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
