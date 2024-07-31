import { useEffect, useState } from "react";
import { getComentarios } from "../api/comentarios";

function useComentarios(token, idVenta, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getComentarios(token, idVenta)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [idVenta, reload]);

  return { data, loading, error };
}

export default useComentarios;
