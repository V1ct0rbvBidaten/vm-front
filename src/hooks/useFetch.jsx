import { useEffect, useState } from "react";
import axios from "axios";

function useFetchById(token, url, reload) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getById = async (token, url) => {
    return await axios.get(`${import.meta.env.VITE_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    getById(token, url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [token, url, reload]);

  return { data, loading, error };
}

export default useFetchById;
