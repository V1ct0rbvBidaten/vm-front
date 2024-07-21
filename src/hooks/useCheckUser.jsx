import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../api/auth";

const useCheckUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");

      if (token !== null) {
        try {
          const response = await getCurrentUser({ token });
          dispatch({
            type: "LOGGED_IN_USER",
            payload: { ...response.data, token },
          });
        } catch (error) {
          console.error("Error fetching user:", error);
          // Handle error appropriately, such as logging out the user or showing an error message
        }
      }
    };

    checkUser();
  }, [dispatch]);
};

export default useCheckUser;
