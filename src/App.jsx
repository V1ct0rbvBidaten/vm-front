import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCheckUser } from "./hooks/useCheckUser";

//Rutas
import Login from "./pages/Login";

//Admin Routes
import AdminRoute from "./components/routes/AdminRoute";
import AdminHome from "./pages/admin/home/AdminHome";
import Landing from "./pages/Landing";

const App = () => {
  useCheckUser();
  return (
    <div className="h-max flex flex-col justify-between">
      <ToastContainer />

      <div className="flex-1 overflow-y-scroll">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/admin/home"
            element={<AdminRoute Component={AdminHome} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
