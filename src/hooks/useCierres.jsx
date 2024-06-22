import { useEffect, useState } from "react";
import { getCierres } from "../api/cierre";

function useCierres(token, body, periodo, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // body.month = periodo.mes;
  // body.year = periodo.año;

  useEffect(() => {
    setLoading(true);
    getCierres(token, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [body, periodo, reload]);

  return { data, loading, error };
}

export default useCierres;
