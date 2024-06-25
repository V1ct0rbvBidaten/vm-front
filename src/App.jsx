import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCheckUser } from "./hooks/useCheckUser";

//Rutas
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";

//Admin Routes
import EmpresaRoute from "./components/routes/EmpresaRoute";
import AdminHome from "./pages/admin/home/AdminHome";
import EmpresaHome from "./pages/empresa/EmpresaHome";

const App = () => {
  useCheckUser();
  return (
    <div className="h-max flex flex-col justify-between">
      <ToastContainer />

      <div className="flex-1 overflow-y-scroll">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route
            exact
            path="/empresa/home"
            element={<EmpresaRoute Component={EmpresaHome} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
