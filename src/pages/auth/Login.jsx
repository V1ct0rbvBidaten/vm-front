import { useState } from "react";
import LandingNav from "../../components/navs/LandingNav";
import { Button, Input, Link } from "@nextui-org/react";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, login } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import LogoFondoNegro from "../../assets/logoFondoNegro.svg";
import { Spinner } from "@nextui-org/react";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
    e.preventDefault();
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { email, password } = values;
  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10  register-container  bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-6 text-left">
            <h1 className="text-5xl font-semibold  text-v2 mt-8">
              Iniciar Sesión
            </h1>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <Input
                required
                label="Correo"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Ingrese su correo"
                startContent={<EnvelopeIcon className="h-4" />}
                name="email"
                size="sm"
                value={email}
                onChange={handleChange}
              />
              <Input
                label="Contraseña"
                variant="bordered"
                size="sm"
                required
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
                className="w-full mt-4 bg-gradient-to-br from-v4 to-v3 text-white"
                type="submit"
                isLoading={loading}
              >
                Iniciar Sesión
              </Button>
            </form>

            <div className="flex flex-col w-full  gap-4">
              <div className="flex gap-2">
                <p>¿No tienes cuenta?</p>
                <Link href="/registro" className="text-v3 font-semibold">
                  Registrarse
                </Link>
              </div>
              <div>
                <Link
                  href="/reset-password"
                  className="text-v3 text-sm font-semibold"
                >
                  Olvide mi contraseña
                </Link>
              </div>
            </div>
          </div>
          <div className="gap-2 col-span-2 background-vemdo rounded-tr-md rounded-br-md p-20 flex items-center flex-col justify-center">
            <span>
              <img src={LogoFondoNegro} />
            </span>
            <span className="text-v4 w-[500px] text-xl pl-5 pr-5 bg-white rounded-full p-2">
              <Typewriter
                words={["Vendo más", "Vendo mucho", "Vendo mejor"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
