import { useEffect, useState } from "react";
import axios from "axios";
import set from "lodash/set"; // A utility function for setting values on objects without mutation
import { formatRut } from "../functions/rut";

function useFetchById(token, url, id, reload) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getById = async (token, url, id) => {
    return await axios.get(`${import.meta.env.VITE_API_URL}/${url}?id=${id}`, {
      headers: {
        "x-auth-token": token,
      },
    });
  };

  useEffect(() => {
    getById(token, url, id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [token, url, id, reload]);

  const handleChange = (e) => {
    console.log(e.target.value);
    const isCheckbox = e.target.type === "checkbox";
    let newValue = isCheckbox ? e.target.checked : e.target.value;

    // Check if the name is 'rut' and apply formattedRut function if it is
    if (e.target.name === "rut") {
      newValue = formatRut(newValue);
    }

    const fieldPath = e.target.name.split(".");
    const lastFieldName = fieldPath.pop();

    setData((prevState) => {
      let newState = { ...prevState };
      let elem = newState; // Start with the newState object

      // Traverse down the path to get to the last object before the field we want to update
      fieldPath.forEach((field) => {
        if (!elem[field]) elem[field] = isCheckbox ? false : {};
        elem = elem[field];
      });

      // Update the last field with the new value
      elem[lastFieldName] = newValue;

      return newState;
    });
  };

  return { data, loading, error, handleChange };
}

export default useFetchById;
