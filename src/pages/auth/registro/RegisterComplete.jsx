import LandingNav from "../../../components/navs/LandingNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegistroUsuario from "./RegistroUsuario";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@nextui-org/react";
import { completeUser, getCurrentUser } from "../../../api/auth";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  contraseña: "",
  validacion_contraseña: "",
};

const RegisterComplete = () => {
  const [values, setValues] = useState(initialState);

  const esEmpresa = JSON.parse(localStorage.getItem("es-empresa"));
  const email = localStorage.getItem("email-verification");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const isEqual = (contraseña, validacion_contraseña) => {
    if (contraseña && validacion_contraseña) {
      return contraseña === validacion_contraseña;
    }
    return true;
  };

  const handleSubmit = () => {
    let data = values;

    delete data["validacion_contraseña"];
    data.email = email;

    let profileData = {
      email: data.email,
      password: data.contraseña,
      es_empresa: esEmpresa,
    };
    console.log(profileData);

    completeUser(profileData)
      .then((res) => {
        toast.success(res.data.detail.message);
        let token = res.data.detail.data.access_token;
        localStorage.setItem("token", token);
        getCurrentUser({ token: token })
          .then((response) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: { ...response.data, token },
            });

            if (esEmpresa) {
              navigate("/empresa/home");
            } else {
              navigate("/vendedor/explorar");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.success(err.data.detail.message);
      });
  };

  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10 register-container bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-4 text-center">
            <h1 className="text-3xl font-normal text-slate-500 mt-8">
              Registrarse
            </h1>
            {esEmpresa ? (
              <Button className="w-32 ml-auto mr-auto h-6 text-white bg-purple-500">
                Empresa
              </Button>
            ) : (
              <Button className="w-32 ml-auto mr-auto h-6 text-white bg-purple-500">
                Vendedor
              </Button>
            )}
            <RegistroUsuario
              email={email}
              values={values}
              handleChange={handleChange}
              isEqual={isEqual}
            />
            <Button onClick={handleSubmit} className="bg-foreground text-white">
              Registrarse
            </Button>
          </div>
          <div className="gap-2 col-span-2 bg-gradient-to-br from-purple-600 to-sky-700 rounded-tr-md rounded-br-md p-20 flex items-center flex-col justify-center">
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

export default RegisterComplete;
