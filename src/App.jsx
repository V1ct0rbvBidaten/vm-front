import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCheckUser } from "./hooks/useCheckUser";

//Rutas
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/registro/Registro";

//Admin Routes
import EmpresaRoute from "./components/routes/EmpresaRoute";
import EmpresaHome from "./pages/empresa/EmpresaHome";

// Empresa Routes
import VentasHome from "./pages/empresa/ventas/VentasHome";
import CuentaHome from "./pages/empresa/cuenta/CuentaHome";
import ExplorarHome from "./pages/vendedor/explorar/ExplorarHome";

// Vendedor Routes
import VendedorRoute from "./components/routes/VendedorRoute";
import VentasHomeVendedor from "./pages/vendedor/ventas/VentasHome";
import CuentaHomeVendedor from "./pages/vendedor/cuenta/CuentaHome";
import ProductosHome from "./pages/vendedor/productos/ProductosHome";
import Balance from "./pages/vendedor/balance/BalanceHome";
import CuentaCreate from "./pages/empresa/cuenta/CuentaCreate";
import CuentaEdit from "./pages/empresa/cuenta/CuentaEdit";
import RegisterComplete from "./pages/auth/registro/RegisterComplete";
import EmpresaDetail from "./pages/vendedor/explorar/EmpresaDetail";
import ProductoDetail from "./pages/vendedor/explorar/Producto/ProductoDetail";
import ProductoDetailEmpresa from "./pages/empresa/productos/ProductoDetail";
import VentaDetail from "./pages/vendedor/ventas/VentaDetail";
import ProductoEmpresa from "./pages/vendedor/productos/ProductoEmpresa";
import ProductoMaletinDetail from "./pages/vendedor/productos/ProductoMaletinDetail";
import CreateProfile from "./pages/vendedor/cuenta/CreateProfile";
import ProductoCreate from "./pages/empresa/productos/ProductoCreate";

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
            path="/registro/completar-perfil"
            element={<RegisterComplete />}
          />
          {/* Rutas Empresa */}
          <Route
            exact
            path="/empresa/home"
            element={<EmpresaRoute Component={EmpresaHome} />}
          />
          <Route
            exact
            path="/empresa/home/create-producto"
            element={<EmpresaRoute Component={ProductoCreate} />}
          />
          <Route
            exact
            path="/empresa/home/producto/:id"
            element={<EmpresaRoute Component={ProductoDetailEmpresa} />}
          />
          <Route
            exact
            path="/empresa/ventas"
            element={<EmpresaRoute Component={VentasHome} />}
          />
          <Route
            exact
            path="/empresa/cuenta"
            element={<EmpresaRoute Component={CuentaHome} />}
          />
          <Route
            exact
            path="/empresa/cuenta/profile-edit"
            element={<EmpresaRoute Component={CuentaEdit} />}
          />
          {/* Rutes Vendedor */}
          <Route
            exact
            path="/vendedor/explorar"
            element={<VendedorRoute Component={ExplorarHome} />}
          />
          <Route
            exact
            path="/vendedor/explorar/empresa/:id"
            element={<VendedorRoute Component={EmpresaDetail} />}
          />
          <Route
            exact
            path="/vendedor/ventas"
            element={<VendedorRoute Component={VentasHomeVendedor} />}
          />
          <Route
            exact
            path="/vendedor/ventas/:idVenta"
            element={<VendedorRoute Component={VentaDetail} />}
          />
          <Route
            exact
            path="/vendedor/productos"
            element={<VendedorRoute Component={ProductosHome} />}
          />
          <Route
            exact
            path="/vendedor/productos/empresa/:idEmpresa"
            element={<VendedorRoute Component={ProductoEmpresa} />}
          />
          <Route
            exact
            path="/vendedor/productos/empresa/:idEmpresa/producto/:idProducto"
            element={<VendedorRoute Component={ProductoMaletinDetail} />}
          />
          <Route
            exact
            path="/vendedor/balance"
            element={<VendedorRoute Component={Balance} />}
          />
          <Route
            exact
            path="/vendedor/cuenta"
            element={<VendedorRoute Component={CuentaHomeVendedor} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
