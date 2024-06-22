import { Button, Divider } from "@nextui-org/react";
import useTrabajadoresDashboard from "../../../hooks/useTrabajadoresDashboard";
import Loading from "../../../components/utils/Loading";

const AdminHome = ({ user }) => {
  const { data: data, loading, error } = useTrabajadoresDashboard(user.token);

  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-2 ">
        <div className="col-span-4 flex items-center justify-start gap-4">
          <h1 className="text-xl font-semibold  flex gap-2 lg:text-xl items-center">
            PANEL DE CONTROL
          </h1>
        </div>
        <Divider className=" col-span-4" />

        <div className="col-span-4 ">
          <div className="text-xs bg-white rounded-md shadow-md">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  //Panel total trabajadores
  const trabajadoresRegistrados = data.totalTrabajadores;
  const trabajadoresPermitidos = data.totalTrabajadoresPermitidos;
  const porcentajeDelTotalPermitidos =
    (data.totalTrabajadores / data.totalTrabajadoresPermitidos) * 100;

  //Trabajadores por estado contratacion
  const tRegitrados = data.items.filter(
    (d) => d.estado_contratacion === "registrado"
  );
  const tFiniquitados = data.items.filter(
    (d) => d.estado_contratacion === "finiquitado"
  );
  const tContratados = data.items.filter(
    (d) => d.estado_contratacion === "contratado"
  );
  const tRelevo = data.items.filter((d) => d.tipo_trabajador === "relevo");
  const tPlaza = data.items.filter((d) => d.tipo_trabajador === "plaza");

  const trabajadoresEstadoContratacion = [
    {
      estado_contratacion: "Contratado",
      cantidad: Number(tContratados.length),
    },
    {
      estado_contratacion: "Finiquitado",
      cantidad: Number(tFiniquitados.length),
    },
    {
      estado_contratacion: "Registrado",
      cantidad: tRegitrados.length,
    },
  ];

  const trabajadoresTipo = [
    {
      estado_contratacion: "Relevo",
      cantidad: Number(tRelevo.length),
    },
    {
      estado_contratacion: "Plaza",
      cantidad: Number(tPlaza.length),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 ">
      <div className="col-span-4 flex items-center justify-start gap-4">
        <h1 className="text-xl font-semibold  flex gap-2 lg:text-xl items-center">
          PANEL DE CONTROL
        </h1>
      </div>
      <Divider className=" col-span-4" />

      <div className="col-span-4 mt-4">
        <div className="grid gap-4 grid-cols-5">
          <ResumenTrabajadores
            porcentajeDelTotalPermitidos={porcentajeDelTotalPermitidos}
            trabajadoresRegistrados={trabajadoresRegistrados}
            trabajadoresPermitidos={trabajadoresPermitidos}
            trabajadoresEstadoContratacion={trabajadoresEstadoContratacion}
            trabajadoresTipo={trabajadoresTipo}
          />

          <CumplimientoRegulatorio data={tContratados} />

          <EstadosDiarios user={user} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
