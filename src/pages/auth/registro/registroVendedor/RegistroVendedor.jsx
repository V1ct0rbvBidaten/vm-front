import { useState } from "react";
import Stepper from "../../../../components/stepper/Stepper";
import StepperControls from "../../../../components/stepper/StepperControls";
import UsuarioForm from "../registroEmpresa/UsuarioForm";
import PerfilForm from "../registroEmpresa/PerfilForm";
import { toast } from "react-toastify";
import {
  formatChileanPhoneNumber,
  formatRut,
} from "../../../../functions/formaters";
import { completeProfile, getCurrentUser } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DataBankForm from "./DataBankForm";

const initialState = {
  email: "",
  contraseña: "",
  validacion_contraseña: "",
  nombres: "",
  apellidos: "",
  direccion: "",
  telefono: "",
  es_vendedor: true,
  es_empresa: false,
  rut_cuenta_bancaria: "",
  banco: "",
  tipo_cuenta_bancaria: "",
  numero_cuenta_bancaria: "",
  email_cuenta_bancaria: "",
};

const RegistroVendedor = () => {
  const [values, setValues] = useState(initialState);
  const [currentStep, setCurrentStep] = useState(1);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const steps = ["Datos Cuenta", "Datos Perfil", "Datos Bancarios"];

  const email = localStorage.getItem("email-verification");

  const handleChange = (e) => {
    if (
      e.target.name === "telefono" ||
      e.target.name === "telefono_razon_social"
    ) {
      setValues({
        ...values,
        [e.target.name]: formatChileanPhoneNumber(e.target.value),
      });
    } else if (
      e.target.name === "rut_razon_social" ||
      e.target.name === "rut_cuenta_bancaria"
    ) {
      setValues({
        ...values,
        [e.target.name]: formatRut(e.target.value),
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const isEqual = (contraseña, validacion_contraseña) => {
    if (contraseña && validacion_contraseña) {
      return contraseña === validacion_contraseña;
    }
    return true;
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    let passwordsEqual = isEqual(
      values.contraseña,
      values.validacion_contraseña
    );

    // let datosPerfil = values.nombre

    if (!passwordsEqual) {
      return toast.error("Las contraseñas no coinciden");
    }

    if (direction === "next") {
      newStep++;
    } else {
      newStep--;
    }

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <UsuarioForm
            email={email}
            handleChange={handleChange}
            values={values}
            isEqual={isEqual}
          />
        );
      case 2:
        return <PerfilForm handleChange={handleChange} values={values} />;
      case 3:
        return <DataBankForm handleChange={handleChange} values={values} />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    let data = values;

    delete data["validacion_contraseña"];
    data.email = email;

    let profileData = {
      email: data.email,
      password: data.contraseña,
      es_empresa: data.es_empresa,
      profile_details: {
        nombres: data.nombres,
        apellidos: data.apellidos,
        direccion: data.direccion,
        telefono: data.telefono,
        es_vendedor: data.es_vendedor,
        rut_cuenta_bancaria: data.rut_cuenta_bancaria,
        banco: data.banco,
        tipo_cuenta_bancaria: data.tipo_cuenta_bancaria,
        numero_cuenta_bancaria: data.numero_cuenta_bancaria,
        email_cuenta_bancaria: data.email_cuenta_bancaria,
      },
    };

    completeProfile(profileData)
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

            navigate("/vendedor/explorar");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.success(err.data.detail.message);
      });
  };
  const handleSubmitText = "Crear perfil";
  return (
    <>
      <Stepper currentStep={currentStep} steps={steps} />
      <div className="border-2 p-4 mt-4 mb-4 rounded-md">
        {displayStep(currentStep)}
      </div>
      <StepperControls
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
        handleSubmit={handleSubmit}
        handleSubmitText={handleSubmitText}
      />
    </>
  );
};

export default RegistroVendedor;
