// Obtener columnas de un array

export const getColumns = (data) => {
  if (!data) return [{ name: "DETALLE", uid: "detalle" }];

  const columns = Object.keys(data).map((key) => {
    return {
      name: key.replace(/_/g, " ").toUpperCase(),
      uid: key,
    };
  });

  columns.push({ name: "DETALLE", uid: "detalle" });

  return columns;
};

export function filterObject(obj, keysToKeep) {
  return Object.keys(obj)
    .filter((key) => keysToKeep.includes(key))
    .reduce((newObj, key) => {
      newObj[key] = obj[key];
      return newObj[key];
    }, {});
}

export function formatChileanPhoneNumber(input) {
  const numeroLimpio = input.replace(/[^0-9kK]/g, "");

  const numerosTelefono = numeroLimpio.slice(3);

  let primeros;
  let segundos;

  console.log({ numeroLimpio, numerosTelefono });
  if (numerosTelefono.length > 8) {
    return `+56 9 ${numerosTelefono.slice(0, 4)} ${numerosTelefono.slice(
      4,
      8
    )}`;
  } else if (numerosTelefono.length > 4) {
    primeros = numerosTelefono.slice(0, 4);
    segundos = numerosTelefono.slice(4);
    return `+56 9 ${primeros} ${segundos}`;
  }

  return `+56 9 ${numerosTelefono}`;
}

export const formatDate = (inputDate) => {
  // Parse the input date string
  const date = new Date(inputDate);

  // Extract day, month, and year
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Return formatted date string
  return `${day}-${month}-${year}`;
};

export const isDateGreaterThanToday = (date) => {
  const inputDate = new Date(date);
  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

  return inputDate > today;
};

export const formatDateYMD = (inputDate) => {
  // Parse the input date string
  const date = new Date(inputDate);

  // Extract day, month, and year
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Return formatted date string
  return `${year}-${month}-${day}`;
};

export const formatDateYM = (inputDate) => {
  // Parse the input date string
  const date = new Date(inputDate);

  // Extract day, month, and year
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Return formatted date string
  console.log(inputDate);
  console.log(month);
  return `${year}-${month}`;
};

export const getSize = (size) => {
  if (size) {
    let fileSize = size / 1024; // Size in KB
    let sizeUnit = "KB"; // Default to KB

    if (fileSize > 1024) {
      // More than 1 MB
      fileSize = fileSize / 1024; // Convert to MB
      sizeUnit = "MB";
    }

    fileSize = fileSize.toFixed(2); // Format size to two decimal places

    return `${fileSize} ${sizeUnit}`;
  }
};

export function contarValoresSimilares(arr, key, additionalKeys = []) {
  const counts = {};

  arr.forEach((obj) => {
    if (obj[key]) {
      if (!counts[obj[key]]) {
        counts[obj[key]] = { name: obj[key], value: 0 };

        // Add additional keys to the object if they exist
        additionalKeys.forEach((addKey) => {
          if (obj[addKey] !== undefined) {
            counts[obj[key]][addKey] = obj[addKey];
          }
        });
      }
      counts[obj[key]].value += 1;
    }
  });

  return Object.values(counts);
}

export function getValoresUnicos(arr, key) {
  const seen = new Set(arr.map((item) => item[key]));
  return [...seen];
}
