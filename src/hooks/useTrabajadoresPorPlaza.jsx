import { useEffect, useState } from "react";
import { getTrabajadoresPorPlaza } from "../api/trabajador";

function useTrabajadoresPorPlaza(
  token,
  dynamicState2,
  plazaRequisitos,
  reload
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTrabajadoresPorPlaza(token, dynamicState2, plazaRequisitos)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [dynamicState2, plazaRequisitos, reload]);

  return { data, loading, error };
}

export default useTrabajadoresPorPlaza;
