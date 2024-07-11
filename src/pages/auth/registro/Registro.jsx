import React, { useEffect, useState, useCallback } from "react";
import LandingNav from "../../../components/navs/LandingNav";
import { CountdownTimer, VerificationCodeInput } from '../../../utils/constants';
import { Button, Input, Link, Tabs, Tab } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { signup, verifyCode } from "../../../api/auth";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const initialState = {
  email: "",
  es_empresa: false,
};


const Registro = () => {
  const [registerData, setRegisterData] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);
  const [selectedTab, setSelectedTab] = useState("vendedor");
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));

  let navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
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
      });
  };

  const { email } = registerData;

  const handleInput = (e, index) => {
    const { value } = e.target;
    if (value.length === 1) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);

      const nextInput = document.querySelector(`#code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (value.length > 1) {
      e.target.value = value[0];
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      const prevInput = document.querySelector(`#code-${index - 1}`);
      prevInput.focus();
    }
  };

  const handleVerificationSubmit = () => {
    const code = verificationCode.join("");

    let data = {
      email: localStorage.getItem("email-verification"),
      code: code,
    };

    console.log("registro");

    verifyCode(data)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        navigate("/registro/completar-perfil");
      })
      .catch((err) => {
        toast.error(err.response.data.detail.message);
      });
  };


  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10 register-container bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-2 text-center">
            <h1 className="text-3xl font-normal text-slate-500 mt-8">
              Registrarse
            </h1>
            {emailSend ? (
              <div className="flex flex-col gap-4 ">
                <p>
                  Un codigo de verificación fue enviado a su correo favor
                  ingresar a continuación para continuar con su registro.
                </p>
                <h2 className="text-2xl font-semibold">
                  <CountdownTimer />
                </h2>
                <div className="space-x-2">
                  {/* {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="number"
                      className="no-arrows w-8 h-8 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      maxLength="1"
                      onInput={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))} */}
                  <VerificationCodeInput
                    verificationCode={verificationCode}
                    setVerificationCode={setVerificationCode} />
                </div>
                <Button
                  className="bg-slate-700 text-white"
                  onClick={handleVerificationSubmit}
                >
                  Ingresar codigo de verificación
                </Button>
              </div>
            ) : (
              <>
                <Tabs
                  key="tipoUsuario"
                  variant="underlined"
                  color="secondary"
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
                      className="w-full mt-4 bg-gradient-to-br from-purple-400 to-purple-500 text-white"
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
                      className="w-full mt-4 bg-gradient-to-br from-rose-300 to-rose-500 text-white"
                      onClick={handleRegister}
                    >
                      Registrarse
                    </Button>
                  </Tab>
                </Tabs>
                <div className="grid grid-cols-3 gap-2 text-center items-center">
                  <div className="w-full h-1 bg-slate-300 justify-center"></div>
                  <div className="w-full text-slate-300 text-center">O</div>
                  <div className="w-full h-1 bg-slate-300 justify-center"></div>
                </div>

                <div className="flex gap-4">
                  <Button className="w-full bg-blue-700 text-white">
                    Facebook
                  </Button>
                  <Button className="w-full bg-slate-700 text-white">
                    Google
                  </Button>
                </div>
                <div className="flex gap-4">
                  <p>¿Ya tienes cuenta?</p>
                  <Link href="/login">Iniciar Sesión</Link>
                </div>
              </>
            )}
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

export default Registro;
