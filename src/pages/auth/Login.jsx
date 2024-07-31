import { useState } from "react";
import LandingNav from "../../components/navs/LandingNav";
import { Button, Input, Link, Tabs, Tab } from "@nextui-org/react";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, login } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const { text } = useTypewriter({
    words: ["Ingresos", "Dinero"],
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    login(values)
      .then((res) => {
        let token = res.data.detail.data.access_token;
        localStorage.setItem("token", token);
        console.log(res);
        toast.success(res.data.detail.message);
        getCurrentUser({ token: token })
          .then((response) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: { ...response.data, token },
            });
            console.log(response.data);
            let esEmpresa = response.data.es_empresa;
            if (esEmpresa) {
              navigate(`/empresa/home`);
            } else if (!esEmpresa) {
              navigate(`/vendedor/explorar`);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.detail.message);
      });
  };

  const { email, password } = values;
  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10  register-container  bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-2 text-center">
            <h1 className="text-3xl font-normal text-slate-500  mt-8 ">
              Iniciar Sesión
            </h1>

            <Input
              label="Correo"
              labelPlacement="outside"
              variant="bordered"
              placeholder="Ingrese su correo"
              startContent={<EnvelopeIcon className="h-4" />}
              name="email"
              value={email}
              onChange={handleChange}
            />
            <Input
              label="Contraseña"
              variant="bordered"
              size="sm"
              placeholder="Ingrese su contraseña"
              labelPlacement="outside"
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
              value={password}
              name="password"
              onChange={handleChange}
            />
            <Button
              className="w-full mt-4 bg-gradient-to-br from-rose-400  to-rose-500 text-white"
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </Button>

            <div className="flex  gap-4">
              <p>¿No tienes cuenta?</p>
              <Link href="/registro">Registrarse</Link>
            </div>
          </div>
          <div className="gap-2 col-span-2 bg-gradient-to-br from-purple-600  to-sky-700 rounded-tr-md rounded-br-md  p-20 flex items-center flex-col justify-center">
            <h1 className="font-semibold text-3xl text-white">
              En{" "}
              <span className="font-bold text-inherit text-5xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                VeMdo
              </span>{" "}
              encuentra
            </h1>
            <span className="text-emerald-500 w-30 text-xl pl-5 pr-5 bg-white rounded-full p-2">
              <Typewriter
                words={[
                  "Más ingresos",
                  "Más productos",
                  "Más ventas",
                  "Mejor catalogo",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <p className="text-white text-center w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
