export function formatChileanPhoneNumber(input) {
  const numeroLimpio = input.replace(/[^0-9kK]/g, "");

  const numerosTelefono = numeroLimpio.slice(3);

  let primeros;
  let segundos;

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

export const formatNumberToCurrency = (num) => {
  // Ensure the input is a number
  if (typeof num !== "number") {
    throw new TypeError("Input must be a number");
  }

  // Convert the number to a string and split it into integer and fractional parts
  let [integer, fraction] = num.toFixed(0).split(".");

  // Reverse the integer part for easy manipulation
  let reversed = integer.split("").reverse().join("");

  // Insert dots every three digits
  let withDots = reversed.match(/.{1,3}/g).join(".");

  // Reverse it back to get the final formatted string
  let formatted = withDots.split("").reverse().join("");

  // Add dollar sign
  return "$" + formatted;
};

export const formatRut = (rut) => {
  const rutLimpio = rut.replace(/[^0-9kK]/g, "");
  const cuerpo = rutLimpio.slice(0, -1);
  const dv = rutLimpio.slice(-1).toUpperCase();
  if (rutLimpio.length < 2) return rutLimpio;

  if (rutLimpio.length >= 9) {
    let cuerpo = rutLimpio.substring(0, 8);
    let dv = rutLimpio.charAt(8);

    let cuerpoFormatoMiles = cuerpo
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
    cuerpoFormatoMiles = cuerpoFormatoMiles
      .split("")
      .reverse()
      .join("")
      .replace(/^[\.]/, "");

    return `${cuerpoFormatoMiles}-${dv}`;
  }

  let cuerpoFormatoMiles = cuerpo
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  cuerpoFormatoMiles = cuerpoFormatoMiles
    .split("")
    .reverse()
    .join("")
    .replace(/^[\.]/, "");

  return `${cuerpoFormatoMiles}-${dv}`;
};

export const validateRut = (rut) => {
  const rutLimpio = rut.replace(/[^0-9kK]/g, "");
  if (rutLimpio.length < 2) return false;
  const cuerpo = rutLimpio.slice(0, -1);
  const dv = rutLimpio.slice(-1).toUpperCase();
  if (!cuerpo.replace(/[^0-9]/g, "")) return false;
  // Calculate verification digit
  let suma = 0;
  let multiplo = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += cuerpo.charAt(i) * multiplo;
    multiplo = (multiplo + 1) % 8 || 2;
  }
  const resultado = 11 - (suma % 11);
  const verificador =
    resultado === 11 ? "0" : resultado === 10 ? "K" : resultado.toString();

  let errRut = true;
  const res = verificador === dv;
  if (rut && res === true) {
    errRut = false;
  }
  return errRut;
};

export const formatDateToDDMMYY = (dateString) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const formatDateToHHMMDDMMYY = (dateString) => {
  const date = new Date(dateString);

  const hora = String(date.getHours()).padStart(2, "0");
  const minutos = String(date.getMinutes()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${hora}:${minutos} ${day}-${month}-${year}`;
};
