import axios from "axios";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const getEstadosDiarios = async (token, body) => {
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
    `${import.meta.env.VITE_API_URL}/get-estados-diarios?${queryString}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
};

export const getMafu = async (token, body) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/mafu`, {
      headers: {
        "x-auth-token": token,
      },
    });
    const data = response.data;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Trabajadores");

    // Define columns
    worksheet.columns = [
      { header: "_id", key: "_id", width: 24 },
      { header: "RUT", key: "rut", width: 24 },
      { header: "Nombre", key: "nombre", width: 24 },
      { header: "Segundo Nombre", key: "segundo_nombre", width: 24 },
      { header: "Apellido Paterno", key: "apellido_paterno", width: 24 },
      { header: "Apellido Materno", key: "apellido_materno", width: 24 },
      { header: "Activo", key: "activo", width: 24 },
      { header: "Tipo Trabajador", key: "tipo_trabajador", width: 24 },
      { header: "Sexo", key: "sexo", width: 24 },
      { header: "Nacionalidad", key: "nacionalidad", width: 24 },
      { header: "Estado Civil", key: "estado_civil", width: 24 },
      { header: "Fecha Nacimiento", key: "fecha_nacimiento", width: 24 },
      { header: "Lugar Nacimiento", key: "lugar_nacimiento", width: 24 },
      { header: "Cargo", key: "cargo", width: 24 },
      { header: "Otra Propiedad", key: "otra_propiedad", width: 24 },
      {
        header: "Contacto Emergencia Teléfono",
        key: "contacto_emergencia_telefono",
        width: 24,
      },
      {
        header: "Contacto Emergencia Nombre",
        key: "contacto_emergencia_nombre",
        width: 24,
      },
      { header: "Dirección", key: "direccion", width: 24 },
      { header: "Email", key: "email", width: 24 },
      { header: "Teléfono", key: "telefono", width: 24 },
    ];

    // Add rows
    data.forEach((item) => {
      worksheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "trabajadores.xlsx");
  } catch (error) {
    console.error("Error generating Excel file", error);
  }
};

export const getResumenAsistencia = async (token, body) => {
  try {
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

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/resumen-asistencia?${queryString}`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    const data = response.data;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Resumen Asistencia");

    // Define columns
    worksheet.columns = [
      { header: "Día", key: "dia", width: 24 },
      { header: "Estado", key: "estado", width: 24 },
      { header: "Nave", key: "nave", width: 24 },
      { header: "RUT Trabajador", key: "rut_trabajador", width: 24 },
      { header: "Trabajador", key: "trabajador", width: 24 },
      { header: "Tipo Trabajador", key: "tipo_trabajador", width: 24 },
      { header: "Plaza", key: "plaza", width: 24 },
      { header: "Source", key: "source", width: 24 },
    ];

    // Add rows
    data.forEach((item) => {
      worksheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "resumen-asistencia.xlsx");
  } catch (error) {
    console.error("Error generating Excel file", error);
  }
};
