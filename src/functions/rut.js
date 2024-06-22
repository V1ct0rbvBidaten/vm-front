export const formatRut = (rut) => {
  const rutLimpio = rut.replace(/[^0-9kK]/g, "");
  const cuerpo = rutLimpio.slice(0, -1);
  const dv = rutLimpio.slice(-1).toUpperCase();
  if (rutLimpio.length < 2) return rutLimpio;
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
