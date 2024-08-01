import { useState } from "react";
import useComentarios from "../../../hooks/useComentarios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDateToHHMMDDMMYY } from "../../../functions/formaters";

const Comentarios = () => {
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const { idVenta } = useParams();

  const handleReload = () => setReload(!reload);

  const { data: dataComentarios, loading: loadingComentarios } = useComentarios(
    user.token,
    idVenta,
    reload
  );

  if (loadingComentarios)
    return (
      <>
        <div
          className="w-full  h-full bg-slate-50 rounded-md p-4 flex flex-col gap-2"
          style={{
            boxShadow:
              "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div></div>
        </div>

        <div className="w-full flex gap-2"></div>
      </>
    );

  const mensajes =
    dataComentarios &&
    dataComentarios.detail &&
    dataComentarios.detail.data.length > 0
      ? dataComentarios.detail.data
      : [];

  return (
    <>
      <div
        className="w-full h-full bg-slate-350 rounded-md p-4 flex flex-col gap-2 overflow-y-scroll"
        style={{
          boxShadow:
            "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="h-100">
          {mensajes && mensajes.length > 0 ? (
            mensajes.map((msg, index) => (
              <>
                <div
                  key={index}
                  className="shadow-md bg-stone-100 p-2 rounded-md m-2"
                >
                  <span>{msg.comentario}</span>
                  <div className="text-right">
                    <span className="text-xs mr-0">
                      {formatDateToHHMMDDMMYY(msg.fecha_creacion)}
                    </span>
                  </div>
                </div>
              </>
            ))
          ) : (
            <p className="text-slate-500">No hay mensajes</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Comentarios;
