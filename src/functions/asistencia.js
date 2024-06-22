export function analizarPlanificacion(statusArray) {
  // Count the number of "No Planificado"
  const countNoPlanificado = statusArray.filter(
    (status) => status === "No Planificado"
  ).length;

  // If the count is equal to the length of the array, all are "No Planificado"
  if (countNoPlanificado === statusArray.length) {
    return "Nave no planificada";
  }
  // If the count is 0, all are "Planificado"
  else if (countNoPlanificado === 0) {
    return "Nave planificada";
  }
  // Otherwise, there's a mix
  else {
    return `${countNoPlanificado} plazas Por Planificar`;
  }
}
