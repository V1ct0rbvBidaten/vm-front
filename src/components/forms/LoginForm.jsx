import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { userLogin, getCurrentUser } from "../../api/auth";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [values, setValues] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { email, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    userLogin({ email: email, password: password })
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("token", token);

        getCurrentUser(token).then((r) => {
          if (!r.data.activo) {
            setLoading(false);
            return toast.error("Usuario desactivado.");
          }

          dispatch({
            type: "LOGGED_IN_USER",
            payload: { ...r.data, token },
          });
          toast.success(`Inicio de sesión correcto`);

          setLoading(false);

          if (r.data.role === "admin") {
            navigate(`/admin/home`);
          } else if (r.data.role === "user") {
            navigate(`/user/home`);
          }
        });
      })
      .catch((err) => {
        toast.error("No se ha podido iniciar sesión");
        console.log(err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (loading)
    return (
      <div className=" justify-center text-center">Iniciando Sesión...</div>
    );

  return (
    <div className="grid gap-2 mr-10 ml-10 ">
      <Input
        type="email"
        variant="bordered"
        size="sm"
        label="Correo"
        placeholder="Ingrese su correo"
        startContent={
          <EnvelopeIcon className="h-5 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
        }
        name="email"
        value={email}
        onChange={handleChange}
      />

      <Input
        label="Contraseña"
        variant="bordered"
        size="sm"
        placeholder="Ingresa tu contraseña"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
            ) : (
              <EyeIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className=" "
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button
        onClick={handleSubmit}
        radius="none"
        size="sm"
        className="w-full bg-gradient-to-br from-slate-400 to-slate-300 text-white shadow-lg"
        style={{ background: "#003246" }}
        disabled={loading}
      >
        Ingresar{" "}
      </Button>
    </div>
  );
};

export default LoginForm;
