import axios from "axios";

export const createNave = async (token, body) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}/create-nave`, body, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const updateNave = async (token, body, id) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/update-nave?id=${id}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getNaveById = async (token, body, id) => {
  return await axios.get(
    `${import.meta.env.VITE_API_URL}/get-nave-by-id?id=${id}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getNaves = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/get-naves?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getNavesTable = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/naves-asistencia?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};
