import { useState } from "react";
import useComentarios from "../../../hooks/useComentarios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../components/utils/Loading";
import { createComentario } from "../../../api/comentarios";
import { toast } from "react-toastify";
import { Button, Input } from "@nextui-org/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { formatDateToHHMMDDMMYY } from "../../../functions/formaters";

const Comentarios = () => {
  const [reload, setReload] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const { idVenta } = useParams();

  const handleReload = () => setReload(!reload);
  const handleMensaje = (e) => setMensaje(e.target.value);

  const handleSubmitMesaje = (e) => {
    e.preventDefault();
    console.log(mensaje);
    setLoading(true);
    createComentario(user.token, idVenta, { comentario: mensaje })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al enviar el mensaje");
      })
      .finally(() => {
        setLoading(false);
        setMensaje("");
        handleReload();
      });
  };

  const { data: dataComentarios, loading: loadingComentarios } = useComentarios(
    user.token,
    idVenta,
    reload
  );

  if (loadingComentarios)
    return (
      <>
        <div
          className="w-full  min-h-[200px] bg-slate-50 rounded-md p-4 flex flex-col gap-2"
          style={{
            boxShadow:
              "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          {" "}
          <div></div>
        </div>

        <div className="w-full flex gap-2">
          <Input
            variant="bordered"
            placeholder="Escribe un mensaje"
            value={mensaje}
            onChange={handleMensaje}
            disabled={loading}
          />
          <Button
            isIconOnly
            className="h-full bg-sky-500 text-white px-2"
            onClick={handleSubmitMesaje}
            disabled={loading}
          >
            <PaperAirplaneIcon className="h-4" />
          </Button>
        </div>
      </>
    );

  const mensajes = dataComentarios.detail.data;

  return (
    <>
      <div
        className="w-full  min-h-[200px] bg-slate-350 rounded-md p-4 flex flex-col gap-2"
        style={{
          boxShadow:
            "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div>
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

      <div className="w-full flex gap-2">
        <Input
          variant="bordered"
          placeholder="Escribe un mensaje"
          value={mensaje}
          onChange={handleMensaje}
          disabled={loading}
        />
        <Button
          isIconOnly
          className="h-full bg-sky-500 text-white px-2"
          onClick={handleSubmitMesaje}
          disabled={loading}
        >
          <PaperAirplaneIcon className="h-4" />
        </Button>
      </div>
    </>
  );
};

export default Comentarios;
