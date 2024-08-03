import { useState, useRef } from "react";
import LandingNav from "../../../components/navs/LandingNav";
import { VerificationCodeInput } from "../registro/VerifyCodeAuth";
import { CountdownTimer } from "../../../components/utils/countDownTimer";
import Loading from "../../../components/utils/Loading";
import { Button, Input, Link, Tabs, Tab } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { signup, verifyCode } from "../../../api/auth";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogoFondoNegro from "../../../assets/logoFondoNegro.svg";

const initialState = {
  email: "",
  es_empresa: false,
};

const Registro = () => {
  const inputsRef = useRef([]);
  var timeCountDown = 300;
  const [registerData, setRegisterData] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);
  const [selectedTab, setSelectedTab] = useState("vendedor");
  const [loading, setLoading] = useState(false); // Estado de carga

  let navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    setLoading(true); // Activar el spinner
    const dataToSend = {
      ...registerData,
      es_empresa: selectedTab === "empresa",
    };
    signup(dataToSend)
      .then((res) => {
        console.log(res);
        const resStatus = res.data.detail.success;
        if (resStatus) {
          toast.success(res.data.detail.message);
          localStorage.setItem(
            "email-verification",
            res.data.detail.data.email
          );
          localStorage.setItem("es-empresa", dataToSend.es_empresa);
          console.log("setEmailSend True");
          setEmailSend(true);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.detail.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const { email } = registerData;

  const handleVerificationSubmit = () => {
    setLoading(true);
    const code = inputsRef.current.map((input) => input.value).join("");

    if (code.length < 6) {
      toast.error(`Has ingresado solo ${code.length} dígitos.`);
      return;
    }

    let data = {
      email: localStorage.getItem("email-verification"),
      code: code,
    };

    verifyCode(data)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        navigate("/registro/completar-perfil");
      })
      .catch((err) => {
        toast.error(err.response.data.detail.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10 register-container bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-6 text-left">
            <h1 className="text-5xl font-semibold  text-v2 mt-8">
              Registrarse
            </h1>
            {loading ? ( // Mostrar el spinner cuando loading es true
              <Loading size="xl" />
            ) : emailSend ? (
              <div className="flex flex-col gap-4 ">
                <p className="text-left">
                  Un código de verificación fue enviado a su correo. Favor de
                  ingresarlo a continuación para continuar con su registro.
                </p>

                <h2 className="text-2xl font-semibold">
                  <CountdownTimer time={timeCountDown} />
                </h2>
                <div className="space-x-2">
                  <VerificationCodeInput inputsRef={inputsRef} />
                </div>
                {loading ? ( // Mostrar el spinner cuando loading es true
                  <Loading size="xl" />
                ) : (
                  <Button
                    className="bg-slate-700 text-white"
                    onClick={handleVerificationSubmit}
                  >
                    Ingresar codigo de verificación
                  </Button>
                )}
              </div>
            ) : (
              <>
                <Tabs
                  key="tipoUsuario"
                  variant="underlined"
                  aria-label="Tabs variants"
                  onSelectionChange={(key) => setSelectedTab(key)}
                >
                  <Tab key="vendedor" title="Vendedor">
                    <Input
                      label="Correo"
                      labelPlacement="outside"
                      variant="bordered"
                      placeholder="Ingrese su correo"
                      className="mt-4"
                      startContent={<EnvelopeIcon className="h-4" />}
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <Button
                      className="w-full mt-4 bg-gradient-to-br from-v4 to-v3 text-white"
                      onClick={handleRegister}
                    >
                      Registrarse
                    </Button>
                  </Tab>
                  <Tab key="empresa" title="Empresa">
                    <Input
                      label="Correo"
                      labelPlacement="outside"
                      placeholder="Ingrese su correo"
                      variant="bordered"
                      className="mt-4"
                      startContent={<EnvelopeIcon className="h-4" />}
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <Button
                      className="w-full mt-4 bg-gradient-to-br from-v4 to-v3 text-white"
                      onClick={handleRegister}
                    >
                      Registrarse
                    </Button>
                  </Tab>
                </Tabs>

                <div className="flex gap-4">
                  <p>¿Ya tienes cuenta?</p>
                  <Link href="/login" className="text-v3 font-semibold">
                    Iniciar Sesión
                  </Link>
                </div>
              </>
            )}
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

export default Registro;
