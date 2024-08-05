import { useState } from "react";
import Logo from "../../assets/logoFondoBlanco.svg";
import { Button, Input } from "@nextui-org/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword, resetPasswordConfirm } from "../../api/auth";
import { useJwt } from "react-jwt";
import { useLocation } from "react-router-dom";

const initialState = {
  contraseña: "",
  validacion_contraseña: "",
  email: "",
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  let navigate = useNavigate();

  const query = useQuery();
  const token = query.get("token");

  const { decodedToken, isExpired } = useJwt(token);

  const [values, setValues] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);
  const [emailSendt, setEmailSendt] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { contraseña, validacion_contraseña, email } = values;

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

  const sendEmail = () => {
    setLoading(true);
    resetPassword({ email })
      .then((res) => {
        toast.success(res.data.message);
        setEmailSendt(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    resetPasswordConfirm({ token, new_password: contraseña })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const { sub } = decodedToken;

  return (
    <>
      <div className="h-full w-screen p-10 ">
        <div className="flex  justify-between gradient-border relative pb-5">
          <img src={Logo} className="w-32" onClick={() => navigate("/")} />
        </div>
        <div className="w-full flex justify-center items-center flex-col pt-5 mt-5 rounded-md border-1 pb-5">
          <div className="w-[40%]">
            <div className="flex  flex-col  gap-4 mt-2">
              {token ? (
                <div className="flex flex-col gap-4">
                  <Input
                    variant="bordered"
                    label="Email"
                    isDisabled
                    value={sub}
                    labelPlacement="outside"
                  />
                  <Input
                    label="Contraseña"
                    variant="bordered"
                    size="sm"
                    placeholder="Ingresa tu contraseña"
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
                    value={contraseña}
                    name="contraseña"
                    onChange={handleChange}
                  />

                  <Input
                    variant="bordered"
                    label="Re-Ingrese Contraseña"
                    labelPlacement="outside"
                    placeholder="Ingrese nuevamente su contraseña"
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
                    name="validacion_contraseña"
                    value={validacion_contraseña}
                    onChange={handleChange}
                  />
                  {!isEqual(contraseña, validacion_contraseña) && (
                    <div className="flex flex-col gap-2">
                      <p className="text-rose-500 text-left ml-0 text-xs italic">
                        *** Las contraseñas no coinciden.
                      </p>
                    </div>
                  )}

                  {!isRightFormat(contraseña) && (
                    <p className="text-rose-500 text-left ml-0 text-xs italic">
                      *** La contraseña debe ser mayor a 8 caracteres y contener
                      al menos una mayúscula.
                    </p>
                  )}
                  <Button
                    className="bg-foreground text-white rounded-full"
                    onClick={handleSubmit}
                  >
                    Restablecer contraseña
                  </Button>
                </div>
              ) : emailSendt ? (
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-semibold">
                    Hemos enviado un correo con las instrucciones para
                    restablecer su contraseña.
                  </p>
                  <Button
                    className="bg-foreground text-white rounded-full"
                    onClick={() => navigate("/")}
                  >
                    Volver al inicio
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold">Ingrese su correo</p>
                  <Input
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Correo"
                    type="email"
                  />
                  <Button
                    className="bg-foreground text-white rounded-full"
                    onClick={sendEmail}
                  >
                    Enviar correo
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
