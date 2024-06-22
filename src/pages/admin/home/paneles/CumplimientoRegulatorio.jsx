import { formatDate } from "../../../../functions/utils";
import { Button, Tab, Tabs, Badge, Pagination } from "@nextui-org/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

const CumplimientoRegulatorio = ({ data }) => {
  const [pageEpp, setPageEpp] = useState(1);
  const [perPageEpp, setPerPageEpp] = useState(5);
  const [pageLibreta, setPageLibreta] = useState(1);
  const [perPageLibreta, setPerPageLibreta] = useState(5);
  const [pageCharlas, setPageCharlas] = useState(1);
  const [perPageCharlas, setPerPageCharlas] = useState(5);
  const [pageContratos, setPageContratos] = useState(1);
  const [perPageContratos, setPerPageContratos] = useState(5);

  const vigenciaLibretas = data.map((item) => {
    const vigenciaDate = new Date(item.libreta.vigencia);
    const currentDate = new Date();
    const timeDiff = vigenciaDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return {
      id: item._id,
      vigencia_libreta: item.libreta.vigencia,
      nombre_completo: `${item.nombre} ${item.segundo_nombre} ${item.apellido_paterno} ${item.apellido_materno}`,
      rut: item.rut,
      dias_vencimiento: daysDiff,
      //   vigencia_epp: item.documentacion.comprobante_entrega_epp.fechaTermino,
    };
  });

  const vigenciaLibretasCantidad = vigenciaLibretas
    .sort((a, b) => new Date(a.vigencia_libreta) - new Date(b.vigencia_libreta))
    .filter((d) => d.dias_vencimiento < 30).length;

  const vigenciaEpp = data.map((item) => {
    const fechaTermino =
      item.documentacion?.comprobante_entrega_epp?.fechaTermino;
    let daysDiff = null;

    if (fechaTermino) {
      const vigenciaDate = new Date(fechaTermino);
      const currentDate = new Date();
      const timeDiff = vigenciaDate - currentDate;
      daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    }

    return {
      id: item._id,
      nombre_completo: `${item.nombre} ${item.segundo_nombre} ${item.apellido_paterno} ${item.apellido_materno}`,
      rut: item.rut,
      dias_vencimiento: daysDiff,
      vigencia_epp: fechaTermino || null,
    };
  });

  const vigenciaEppCantidad = vigenciaEpp
    .sort((a, b) => new Date(a.vigencia_epp) - new Date(b.vigencia_epp))
    .filter(
      (d) => d.dias_vencimiento < 30 || d.vigencia_epp === undefined
    ).length;

  const vigenciaContratos = data.map((item) => {
    const datesWithObjects = item.caracteristicas_contrato.map((item) => ({
      ...item,
      fechaInicio: new Date(item.fechaInicio),
    }));
    const latestObject = datesWithObjects.reduce((latest, current) =>
      current.fechaInicio > latest.fechaInicio ? current : latest
    );

    const vigenciaDate = new Date(latestObject.fechaTermino);
    const currentDate = new Date();
    const timeDiff = vigenciaDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return {
      id: item._id,
      nombre_completo: `${item.nombre} ${item.segundo_nombre} ${item.apellido_paterno} ${item.apellido_materno}`,
      rut: item.rut,
      dias_vencimiento: daysDiff,
      tipo_contrato: latestObject.tipo_contrato,
      vigencia_inicio: latestObject.fechaInicio,
      vigencia_termino: latestObject.fechaTermino,
    };
  });

  const dataCharlasUnflatened = data.filter(
    (d) => d.documentacion.respaldo_charlas_seguridad.length > 0
  );

  const vigenciaCharlas = dataCharlasUnflatened.flatMap((d) =>
    d.documentacion.respaldo_charlas_seguridad.map((charla) => {
      const fechaTermino = d.caracteristicas_contrato[0]?.fechaTermino;
      let daysDiff = null;

      if (fechaTermino) {
        const vigenciaDate = new Date(fechaTermino);
        const currentDate = new Date();
        const timeDiff = vigenciaDate - currentDate;
        daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      }

      return {
        id: d._id,
        nombre_completo: `${d.nombre} ${d.segundo_nombre} ${d.apellido_paterno} ${d.apellido_materno}`,
        rut: d.rut,
        fechaInicio: d.caracteristicas_contrato[0]?.fechaInicio, // Adjust as necessary
        fechaTermino: d.caracteristicas_contrato[0]?.fechaTermino, // Adjust as necessary
        nombre_charla: charla.nombre_charla,
        link: charla.link,
        dias: daysDiff,
        charla_fechaInicio: charla.fechaInicio,
        charla_fechaTermino: charla.fechaTermino,
        charla_id: charla._id,
      };
    })
  );

  //Paginado EPP
  const pagesEpp = Math.ceil(
    vigenciaEpp
      .sort((a, b) => new Date(a.vigencia_epp) - new Date(b.vigencia_epp))
      .filter((d) => d.dias_vencimiento < 30 || d.vigencia_epp === undefined)
      .length / perPageEpp
  );

  const itemsEpp = useMemo(() => {
    const start = (pageEpp - 1) * perPageEpp;
    const end = start + perPageEpp;
    const filteredData = vigenciaEpp
      .sort((a, b) => new Date(a.vigencia_epp) - new Date(b.vigencia_epp))
      .filter((d) => d.dias_vencimiento < 30 || d.vigencia_epp === undefined);
    return filteredData.slice(start, end);
  }, [pageEpp, vigenciaEpp, perPageEpp]);

  //Paginado Libreta
  const pagesLibreta = Math.ceil(
    vigenciaLibretas
      .sort(
        (a, b) => new Date(a.vigencia_libreta) - new Date(b.vigencia_libreta)
      )
      .filter((d) => d.dias_vencimiento < 30).length / perPageLibreta
  );

  const itemsLibreta = useMemo(() => {
    const start = (pageLibreta - 1) * perPageEpp;
    const end = start + perPageLibreta;
    const filteredData = vigenciaLibretas
      .sort(
        (a, b) => new Date(a.vigencia_libreta) - new Date(b.vigencia_libreta)
      )
      .filter((d) => d.dias_vencimiento < 30);
    return filteredData.slice(start, end);
  }, [pageLibreta, vigenciaLibretas, perPageLibreta]);

  //Paginado Charlas
  const pagesCharlas = Math.ceil(
    vigenciaCharlas.sort((a, b) => a.dias - b.dias).filter((d) => d.dias < 30)
      .length / perPageCharlas
  );

  const itemsCharla = useMemo(() => {
    const start = (pageCharlas - 1) * perPageCharlas;
    const end = start + perPageCharlas;
    const filteredData = vigenciaCharlas
      .sort((a, b) => a.dias - b.dias)
      .filter((d) => d.dias < 30);
    return filteredData.slice(start, end);
  }, [pageCharlas, vigenciaCharlas, perPageCharlas]);

  //Paginado Contratos
  const pagesContratos = Math.ceil(
    vigenciaContratos
      .sort((a, b) => a.dias_vencimiento - b.dias_vencimiento)
      .filter((d) => d.tipo_contrato === "fijo")
      .filter((d) => d.dias_vencimiento < 15).length / perPageContratos
  );

  const itemsContratos = useMemo(() => {
    const start = (pageContratos - 1) * perPageContratos;
    const end = start + perPageContratos;
    const filteredData = vigenciaContratos
      .sort((a, b) => a.dias_vencimiento - b.dias_vencimiento)
      .filter((d) => d.tipo_contrato === "fijo")
      .filter((d) => d.dias_vencimiento < 15);
    return filteredData.slice(start, end);
  }, [pageContratos, vigenciaContratos, perPageContratos]);

  return (
    <div className="bg-white p-4 shadow-md flex flex-col justify-start gap-1 items-start col-span-3">
      <h1 className="font-bold text-md text-slate-700">
        Cumplimiento Regulatorio
      </h1>
      <Tabs variant="underlined" color="danger">
        <Tab
          key="libreta"
          title={
            <div className="flex items-center space-x-2 gap-2">
              <span>Libreta de Embarco</span>
              {vigenciaLibretasCantidad && vigenciaLibretasCantidad > 0 ? (
                <Badge
                  content={vigenciaLibretasCantidad}
                  color="danger"
                ></Badge>
              ) : (
                ""
              )}
            </div>
          }
          className="w-full"
        >
          <table className="table-default ">
            <thead>
              <tr className="text-xs ">
                <th>Nombre </th>
                <th>Vencimiento Libreta </th>
                <th>Dias </th>
                <th>Ir </th>
              </tr>
            </thead>
            <tbody>
              {itemsLibreta.map((c) => (
                <tr key={c.id}>
                  <td>{c.nombre_completo}</td>
                  <td className="text-center">
                    {c.vigencia_libreta ? formatDate(c.vigencia_libreta) : ""}
                  </td>
                  <td className="text-center">
                    <Button
                      className={`bg-${
                        c.dias_vencimiento < 0 ? "rose" : "amber"
                      }-500 h-4 text-white text-xs`}
                    >
                      {c.dias_vencimiento}
                    </Button>
                  </td>
                  <td>
                    <Link
                      key={c.id}
                      to={`/admin/personal-embarcado/detalle-trabajador/${c.id}`}
                    >
                      <ChevronRightIcon className="h-4  bg-emerald-500 text-white rounded-md w-8 transition-all hover:bg-emerald-300" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between w-full mt-2">
            <Pagination
              showControls
              total={pagesLibreta}
              initialPage={pageLibreta}
              onChange={setPageLibreta}
            />
            <span className="text-slate-400 text-sm">
              {vigenciaLibretasCantidad} trabajadores en total
            </span>
          </div>
        </Tab>
        <Tab
          key="epp"
          className="w-full"
          title={
            <div className="flex items-center space-x-2 gap-2">
              <span>EPP</span>
              {vigenciaEppCantidad && vigenciaEppCantidad > 0 ? (
                <Badge content={vigenciaEppCantidad} color="danger"></Badge>
              ) : (
                ""
              )}
            </div>
          }
        >
          <table className="table-default mb-4">
            <thead>
              <tr className="text-xs ">
                <th>Nombre </th>
                <th>Vigencia EPP </th>
                <th>Dias </th>
                <th>Ir </th>
              </tr>
            </thead>
            <tbody>
              {itemsEpp.map((c) => (
                <tr key={c.id}>
                  <td>{c.nombre_completo}</td>
                  <td className="text-center">
                    {c.vigencia_epp
                      ? formatDate(c.vigencia_epp)
                      : "No ingresado"}
                  </td>
                  <td className="text-center">
                    <Button
                      className={`bg-${
                        c.dias_vencimiento < 0 ? "rose" : "amber"
                      }-500 h-4 text-white text-xs`}
                    >
                      {c.dias_vencimiento ? c.dias_vencimiento : "No ingresado"}
                    </Button>
                  </td>
                  <td>
                    <Link
                      key={c.id}
                      to={`/admin/personal-embarcado/detalle-trabajador/${c.id}`}
                    >
                      <ChevronRightIcon className="h-4  bg-emerald-500 text-white rounded-md w-8 transition-all hover:bg-emerald-300" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between w-full">
            <Pagination
              showControls
              total={pagesEpp}
              initialPage={pageEpp}
              onChange={setPageEpp}
            />
            <span className="text-slate-400 text-sm">
              {
                vigenciaEpp
                  .sort(
                    (a, b) =>
                      new Date(a.vigencia_epp) - new Date(b.vigencia_epp)
                  )
                  .filter(
                    (d) =>
                      d.dias_vencimiento < 30 || d.vigencia_epp === undefined
                  ).length
              }{" "}
              trabajadores en total
            </span>
          </div>
        </Tab>
        <Tab
          key="charlas"
          className="w-full"
          title={
            <div className="flex items-center space-x-2 gap-2">
              <span>Charlas</span>
              {vigenciaCharlas && vigenciaCharlas.length > 0 ? (
                <Badge
                  content={
                    vigenciaCharlas
                      .sort((a, b) => a.dias - b.dias)
                      .filter((d) => d.dias < 30).length
                  }
                  color="danger"
                ></Badge>
              ) : (
                ""
              )}
            </div>
          }
        >
          <table className="table-default ">
            <thead>
              <tr className="text-xs ">
                <th>Nombre </th>
                <th>Charla </th>
                <th>Fecha Charla </th>
                <th>Fecha Vencimiento </th>
                <th>Dias </th>
                <th>Ir </th>
              </tr>
            </thead>
            <tbody>
              {itemsCharla.map((c) => (
                <tr key={c.id}>
                  <td>{c.nombre_completo}</td>
                  <td>{c.nombre_charla}</td>
                  <td className="text-center">
                    {c.fechaInicio ? formatDate(c.fechaInicio) : ""}
                  </td>
                  <td className="text-center">
                    {c.fechaTermino ? formatDate(c.fechaTermino) : ""}
                  </td>
                  <td className="text-center">
                    <Button
                      className={`bg-${
                        c.dias < 0 ? "rose" : "amber"
                      }-500 h-4 text-white`}
                    >
                      {c.dias}
                    </Button>
                  </td>
                  <td>
                    <Link
                      key={c.id}
                      to={`/admin/personal-embarcado/detalle-trabajador/${c.id}`}
                    >
                      <ChevronRightIcon className="h-4  bg-emerald-500 text-white rounded-md w-8 transition-all hover:bg-emerald-300" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between w-full mt-2">
            <Pagination
              showControls
              total={pagesCharlas}
              initialPage={pageCharlas}
              onChange={setPageCharlas}
            />
            <span className="text-slate-400 text-sm ">
              {itemsCharla.length} trabajadores en total
            </span>
          </div>
        </Tab>
        <Tab
          key="contratos"
          className="w-full"
          title={
            <div className="flex items-center space-x-2 gap-2">
              <span>Contratos</span>
              {vigenciaContratos && vigenciaContratos.length > 0 ? (
                <Badge
                  content={
                    vigenciaContratos
                      .sort((a, b) => a.dias_vencimiento - b.dias_vencimiento)
                      .filter((d) => d.tipo_contrato === "fijo")
                      .filter((d) => d.dias_vencimiento < 15).length
                  }
                  color="danger"
                ></Badge>
              ) : (
                ""
              )}
            </div>
          }
        >
          <table className="table-default ">
            <thead>
              <tr className="text-xs ">
                <th>Nombre </th>
                <th>Fecha Contrato </th>
                <th>Vencimiento Contrato </th>
                <th>Dias </th>
                <th>Ir </th>
              </tr>
            </thead>
            <tbody>
              {itemsContratos.map((c) => (
                <tr key={c.id}>
                  <td>{c.nombre_completo}</td>
                  <td className="text-center">
                    {c.vigencia_inicio ? formatDate(c.vigencia_inicio) : ""}
                  </td>
                  <td className="text-center">
                    {c.vigencia_termino ? formatDate(c.vigencia_termino) : ""}
                  </td>
                  <Button
                    className={`bg-${
                      c.dias < 0 ? "rose" : "amber"
                    }-500 h-4 text-white`}
                  >
                    {c.dias_vencimiento}
                  </Button>
                  <td>
                    <Link
                      key={c.id}
                      to={`/admin/personal-embarcado/detalle-trabajador/${c.id}`}
                    >
                      <ChevronRightIcon className="h-4  bg-emerald-500 text-white rounded-md w-8 transition-all hover:bg-emerald-300" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between w-full mt-2">
            <Pagination
              showControls
              total={pagesContratos}
              initialPage={pageContratos}
              onChange={setPageContratos}
            />
            <span className="text-slate-400 text-sm ">
              {itemsContratos.length} trabajadores en total
            </span>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CumplimientoRegulatorio;
