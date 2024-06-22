import axios from "axios";

export const createTrabajador = async (token, body) => {
  return await axios.post(
    `${import.meta.env.VITE_API_URL}/create-trabajador`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const updateTrabajador = async (token, body, id) => {
  return await axios.put(
    `${import.meta.env.VITE_API_URL}/update-trabajador?id=${id}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getTrabajadorById = async (token, body, id) => {
  return await axios.get(
    `${import.meta.env.VITE_API_URL}/get-trabajador-by-id?id=${id}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getTrabajadoresPorPlaza = async (token, params, body) => {
  let queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
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

  return await axios.post(
    `${import.meta.env.VITE_API_URL}/trabajadores-disponibles?${queryString}`,
    body,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getTrabajadores = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/get-trabajadores?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getTrabajadoresTable = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/get-trabajadores-table?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getTrabajadoresDashboard = async (token, body) => {
  if (!body) {
    body = {};
  }
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
    `${import.meta.env.VITE_API_URL}/trabajadores-dashboard?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const uploadFile = async (token, params, file) => {
  // Filtrar los parámetros para excluir valores nulos o indefinidos
  const filteredParams = Object.entries(params).reduce((acc, [key, value]) => {
    if (value != null) {
      // Cambiado a != null para incluir valores falsos pero no nulos/undefined
      acc[key] = value;
    }
    return acc;
  }, {});

  // Crear un objeto FormData
  const formData = new FormData();

  // Agregar el archivo a formData
  formData.append("file", file);

  // Agregar los otros parámetros a formData
  Object.keys(filteredParams).forEach((key) => {
    formData.append(key, filteredParams[key]);
  });

  // Configuración de la solicitud, incluyendo headers
  const config = {
    headers: {
      "x-auth-token": token,
      "Content-Type": "multipart/form-data", // Importante para la carga de archivos
    },
  };

  // Realizar la solicitud POST
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/upload-file?${new URLSearchParams(
        filteredParams
      ).toString()}`,
      formData,
      config
    );
    return response;
  } catch (error) {
    console.error("Error al subir el archivo:", error);
    throw error;
  }
};

export const downloadFile = async (token, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/download/${id}`,
      {
        headers: {
          "x-auth-token": token,
        },
        responseType: "blob", // Important for handling binary data
      }
    );

    // Create a URL for the file
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const fileLink = document.createElement("a");

    fileLink.href = fileURL;
    fileLink.setAttribute("download", id); // Set the file name and extension
    document.body.appendChild(fileLink);

    fileLink.click();

    // Clean up and revoke the URL
    fileLink.parentNode.removeChild(fileLink);
    window.URL.revokeObjectURL(fileURL);
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

export const deleteFile = async (token, idArchivo) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/delete-file/${idArchivo}`,
      {
        headers: {
          "x-auth-token": token,
        },
        responseType: "blob", // Important for handling binary data
      }
    );

    return response;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};
