import { useState } from "react";
import Stepper from "../../../../components/stepper/Stepper";
import StepperControls from "../../../../components/stepper/StepperControls";
import UsuarioForm from "./UsuarioForm";
import PerfilForm from "./PerfilForm";
import EmpresaForm from "./EmpresaForm";
import DocumentacionForm from "./DocumentacionForm";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  contraseña: "",
  validacion_contraseña: "",
  nombres: "",
  apellidos: "",
  direccion: "",
  telefono: "",
  es_vendedor: false,
  es_empresa: false,
  rut_razon_social: "",
  nombre_razon_social: "",
  direccion_razon_social: "",
  telefono_razon_social: "",
  correo_electronico_razon_social: "",
  representante_legal: "",
};

const RegistroEmpresa = () => {
  const [values, setValues] = useState(initialState);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Datos Cuenta",
    "Datos Perfil",
    "Datos Empresa",
    "Documentación",
  ];

  const email = localStorage.getItem("email-verification");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegisterProfile = () => {
    console.log({ datos: values });
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
        return <PerfilForm />;
      case 3:
        return <EmpresaForm />;
      case 4:
        return <DocumentacionForm />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log("Hola");
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

export default RegistroEmpresa;
