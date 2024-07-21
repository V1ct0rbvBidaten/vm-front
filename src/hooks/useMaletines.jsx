import { useEffect, useState } from "react";
import { getMaletines } from "../api/maletin";

function useMaletines(token, body, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMaletines(token, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [body, reload]);

  return { data, loading, error };
}

export default useMaletines;
