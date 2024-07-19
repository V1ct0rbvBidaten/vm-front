import axios from "axios";

export const uploadFile = async (token, params, files) => {
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

  // Agregar cada archivo del array files a formData
  files.forEach((file, index) => {
    formData.append(`files`, file);
  });

  // Agregar los otros parámetros a formData
  Object.keys(filteredParams).forEach((key) => {
    formData.append(key, filteredParams[key]);
  });

  // Configuración de la solicitud, incluyendo headers
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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
