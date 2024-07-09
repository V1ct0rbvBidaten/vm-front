import { useEffect, useState } from "react";
import { getProductos } from "../api/products";

function useProductos(token, body, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductos(token, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [body, reload]);

  return { data, loading, error };
}

export default useProductos;
