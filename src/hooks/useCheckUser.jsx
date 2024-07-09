import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "../api/auth";

export const useCheckUser = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");

      if (token !== null) {
        try {
          const response = await getCurrentUser({ token: token });
          dispatch({
            type: "LOGGED_IN_USER",
            payload: { ...response.data, token },
          });
        } catch (error) {
          console.error("Error fetching user:", error);
          // Handle error appropriately
        }
      }
    };

    checkUser();
  }, [dispatch]);
};
