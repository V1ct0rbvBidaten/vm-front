import {
  CheckBadgeIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React from "react";

const Finalizar = ({
  handleClick,
  handleSubmit,
  values,
  cargos,
  empresas,
  cargoValue,
  empresaValue,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 rounded-md mb-2 bg-slate-50">
        <CheckBadgeIcon className="h-20 text-emerald-500" />
        <h2 className="text-2xl text-gray-600 ">
          Favor, confirmar el registro del trabajador.
        </h2>

        <div className="mt-2 text-sm p-1 pl-5 font-semibold uppercase  bg-white w-full border-1 ">
          Datos Personales
        </div>
        <div className="overflow-x-auto w-full bg-white dark:bg-neutral-700">
          <table className="min-w-full text-left text-xs whitespace-nowrap">
            <tbody>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  RUT
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.rut}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Estado Civil
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.estado_civil}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Nombre
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.nombre}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Segundo Nombre
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.segundo_nombre}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Apellido Paterno
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.apellido_paterno}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Apellido Materno
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.apellido_materno}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Sexo
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.sexo}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Nacionalidad
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.nacionalidad}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Fecha de Nacimiento
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.fecha_nacimiento}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Lugar de Nacimiento
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.lugar_nacimiento}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2 text-sm p-1 pl-5 font-semibold uppercase  bg-white w-full border-1 ">
          Datos De Contacto
        </div>
        <div className="overflow-x-auto w-full bg-white dark:bg-neutral-700">
          <table className="min-w-full text-left text-xs whitespace-nowrap">
            <tbody>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Dirección
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.informacion_contacto.direccion}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Email
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.informacion_contacto.email}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Telefono
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.informacion_contacto.telefono}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                {" "}
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Nombre Contacto Emergencia
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.informacion_contacto.contacto_emergencia.nombre}
                </td>
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Telefono Emergencia
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.informacion_contacto.contacto_emergencia.telefono}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2 text-sm p-1 pl-5 font-semibold uppercase  bg-white w-full border-1 ">
          Datos De Ingreso
        </div>
        <div className="overflow-x-auto w-full bg-white dark:bg-neutral-700">
          <table className="min-w-full text-left text-xs whitespace-nowrap">
            <tbody>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Cargo
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {cargos &&
                    cargoValue &&
                    cargos.items.find((d) => d._id === cargoValue).nombre_cargo}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-600">
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Tipo de trabajador
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600 capitalize">
                  {values.tipo_trabajador}
                </td>
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Empresa
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {empresas &&
                    empresaValue &&
                    empresas.items.find((d) => d._id === empresaValue)
                      .nombre_empresa}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-sm p-1 pl-5 font-semibold uppercase  bg-white w-full border-1 ">
          Rol de embarco
        </div>
        <div className="overflow-x-auto w-full bg-white dark:bg-neutral-700">
          <table className="min-w-full text-left text-xs whitespace-nowrap">
            <tbody>
              <tr className="border-b dark:border-neutral-600">
                <th
                  scope="row"
                  className="px-6 py-1 border-x dark:border-neutral-600"
                >
                  Embarco
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.rol_embarco.factor_1}
                </td>
                <th className="px-6 py-1 border-x dark:border-neutral-600">
                  Descanso
                </th>
                <td className="bg-gray-50 px-6 py-1 border-x dark:border-neutral-600">
                  {values.rol_embarco.factor_2}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          onClick={() => handleClick()}
          variant="ghost"
          size="sm"
          startContent={<ChevronLeftIcon className="h-4" />}
        >
          Atras
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-emerald-500 text-white"
          size="sm"
        >
          Registrar trabajador
        </Button>
      </div>
    </div>
  );
};

export default Finalizar;
