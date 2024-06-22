import { useEffect, useState } from "react";
import { getTrabajadoresDashboard } from "../api/trabajador";

function useTrabajadoresDashboard(token, body, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTrabajadoresDashboard(token)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [body, reload]);

  return { data, loading, error };
}

export default useTrabajadoresDashboard;
