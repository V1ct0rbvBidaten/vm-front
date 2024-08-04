import LandingNav from "../../../components/navs/LandingNav";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegistroUsuario from "./RegistroUsuario";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@nextui-org/react";
import LogoFondoNegro from "../../../assets/logoFondoNegro.svg";
import ModalVerificarTerminos from "./ModalVerificarTerminos";
import {
  completeProfile,
  completeUser,
  getCurrentUser,
} from "../../../api/auth";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  contraseña: "",
  validacion_contraseña: "",
};

const RegisterComplete = () => {
  const [values, setValues] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [endReached, setEndReached] = useState(false);

  const esEmpresa = JSON.parse(localStorage.getItem("es-empresa"));
  const email = localStorage.getItem("email-verification");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
    setEndReached(false);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const isEqual = (contraseña, validacion_contraseña) => {
    if (contraseña && validacion_contraseña) {
      return contraseña === validacion_contraseña;
    }
    return true;
  };

  const isRightFormat = (contraseña) => {
    const hasCapitalLetter = /[A-Z]/.test(contraseña);
    const isLongEnough = contraseña.length > 8;

    console.log(hasCapitalLetter, isLongEnough);
    return hasCapitalLetter && isLongEnough;
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
        console.log(err);
        toast.success(err.response.data.detail.message);
      });
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log({ scrollTop, scrollHeight, clientHeight });
    if (scrollTop + clientHeight + 1 >= scrollHeight) {
      setEndReached(true);
    } else {
      setEndReached(false);
    }
  };

  return (
    <>
      <LandingNav />
      <ModalVerificarTerminos
        handleOpen={handleOpen}
        open={open}
        handleSubmit={handleSubmit}
        onScroll={handleScroll}
        endReached={endReached}
      />

      <div className="flex justify-center p-10 register-container bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-6text-center">
            <div className="relative mb-6">
              <h1 className="text-5xl font-semibold text-v2 mt-8">
                Registrarse
              </h1>
              {esEmpresa ? (
                <Button className="absolute top-5 right-0 w-32 h-6 text-white bg-v3">
                  Empresa
                </Button>
              ) : (
                <Button className="absolute top-5 right-0 w-32 h-6 text-white bg-v3">
                  Vendedor
                </Button>
              )}
            </div>
            <RegistroUsuario
              email={email}
              values={values}
              handleChange={handleChange}
              isEqual={isEqual}
              isRightFormat={isRightFormat}
            />
            <Button
              onClick={handleOpen}
              className="bg-foreground text-white mt-4"
            >
              Registrarse
            </Button>
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

export default RegisterComplete;
