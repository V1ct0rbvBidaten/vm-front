import { addDays } from "date-fns";

export const getDiasMes = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

export const numeroAMes = (numero) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Resta 1 para convertir el número del mes al índice correcto del arreglo (0-11)
  return meses[numero];
};

export const reorganizeData = (entries) => {
  const groupedData = {};

  // Group entries by id_trabajador
  entries.forEach((entry) => {
    const { id_trabajador, plaza } = entry;

    // Initialize the group if it doesn't exist
    if (!groupedData[id_trabajador._id]) {
      groupedData[id_trabajador._id] = {
        id_trabajador: id_trabajador._id,
        plazas: new Set([plaza]), // Now using a Set to store unique plazas
        nombre: id_trabajador.nombre + " " + id_trabajador.apellido_paterno,
        asistencia: [],
      };
    } else {
      // Add the plaza to the Set for existing groups to ensure uniqueness
      groupedData[id_trabajador._id].plazas.add(plaza);
    }

    // Append the current entry to the 'asistencia' array for the group
    groupedData[id_trabajador._id].asistencia.push(entry);
  });

  // Convert the Sets of plazas to Arrays of unique values for each group
  Object.keys(groupedData).forEach((key) => {
    groupedData[key].plazas = [...groupedData[key].plazas];
  });

  // Convert grouped data into the desired array format
  return Object.values(groupedData);
};

export const getDayNameFromDate = (date) => {
  const newDate = new Date(date);

  const days = [6, 0, 1, 2, 3, 4, 5];
  return days[newDate.getUTCDay()];
};

export const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};
