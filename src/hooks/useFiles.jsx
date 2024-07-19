import { useEffect, useState } from "react";
import { getFiles } from "../api/file";

function useFiles(token, body, reloadFiles) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getFiles(token, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [body, reloadFiles]);

  return { data, loading, error };
}

export default useFiles;
