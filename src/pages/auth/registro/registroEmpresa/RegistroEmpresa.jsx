import { useState } from "react";
import Stepper from "../../../../components/stepper/Stepper";
import StepperControls from "../../../../components/stepper/StepperControls";
import UsuarioForm from "../registroVendedor/UsuarioForm";
import PerfilForm from "./PerfilForm";
import { toast } from "react-toastify";
import {
  formatChileanPhoneNumber,
  formatRut,
} from "../../../../functions/formaters";
import { completeProfile, getCurrentUser } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";
import EmpresaForm from "./EmpresaForm";
import { useDispatch } from "react-redux";
import DataBankForm from "./DataBankForm";
import { validateFields } from "../../../../functions/forms";
import { Spinner } from "@nextui-org/react";

const initialState = {
  email: "",
  contraseña: "",
  validacion_contraseña: "",
  nombres: "",
  apellidos: "",
  direccion: "",
  comuna: "",
  region: "",
  telefono: "+56 9 ",
  es_vendedor: false,
  es_empresa: false,
  rut_razon_social: "",
  nombre_razon_social: "",
  direccion_razon_social: "",
  telefono_razon_social: "+56 9 ",
  correo_electronico_razon_social: "",
  representante_legal: "",
  rut_cuenta_bancaria: "",
  banco: "",
  tipo_cuenta_bancaria: "",
  numero_cuenta_bancaria: "",
  email_cuenta_bancaria: "",
  comuna_razon_social: "",
  rubro: "",
};

const RegistroEmpresa = ({ user }) => {
  const [values, setValues] = useState(initialState);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [rubro, setRubro] = useState("");
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const steps = [
    "Datos representante legal",
    "Datos Bancarios",
    "Datos Empresa",
  ];

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

  const handleSubmit = () => {
    let data = values;

    delete data["validacion_contraseña"];
    data.email = email;

    console.log(user);

    let profileData = {
      email: user.correo_electronico,
      es_empresa: user.es_empresa,
      profile_details: {
        nombres: data.nombres,
        apellidos: data.apellidos,
        direccion: data.direccion,
        comuna: data.comuna,
        region: data.region,
        telefono: data.telefono,
        rubro: data.rubro,
        es_vendedor: data.es_vendedor,
        rut_razon_social: data.rut_razon_social,
        nombre_razon_social: data.nombre_razon_social,
        direccion_razon_social: data.direccion_razon_social,
        telefono_razon_social: data.telefono_razon_social,
        correo_electronico_razon_social: data.correo_electronico_razon_social,
        representante_legal: data.representante_legal,
        rut_cuenta_bancaria: data.rut_cuenta_bancaria,
        banco: data.banco,
        tipo_cuenta_bancaria: data.tipo_cuenta_bancaria,
        numero_cuenta_bancaria: data.numero_cuenta_bancaria,
        email_cuenta_bancaria: data.email_cuenta_bancaria,
        region_razon_social: data.region_razon_social,
        comuna_razon_social: data.comuna_razon_social,
      },
    };

    setLoading(true);

    completeProfile(profileData)
      .then((res) => {
        toast.success(res.data.detail.message);
        let token = user.token;
        getCurrentUser({ token: token })
          .then((response) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: { ...response.data, token },
            });

            navigate(`/empresa/home`);
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

  const handleSubmitText = "Crear perfil";

  const handleClick = (direction) => {
    let newStep = currentStep;

    const fieldsPerfil = [
      { name: "Nombres", value: values.nombre },
      { name: "Apellidos", value: values.apellidos },
      { name: "Telefono", value: values.telefono },
      { name: "Direccion", value: values.direccion },
      { name: "Region", value: values.region },
      { name: "Comuna", value: values.comuna },
    ];

    const fieldsBanco = [
      { name: "Banco", value: values.banco },
      { name: "Rut ", value: values.rut_cuenta_bancaria },
      { name: "Tipo Cuenta", value: values.tipo_cuenta_bancaria },
      { name: "Número", value: values.numero_cuenta_bancaria },
      { name: "Email", value: values.email_cuenta_bancaria },
    ];

    const fieldsEmpresa = [
      { name: "Rut", value: values.rut_razon_social },
      { name: "Nombre", value: values.nombre_razon_social },
      { name: "Dirección", value: values.direccion_razon_social },
      { name: "Telefono", value: values.telefono_razon_social },
      // { name: "Correo", value: values.correo_electronico_razon_social },
      { name: "Rubro", value: values.rubro },
      { name: "Region", value: values.region_razon_social },
      { name: "Comuna", value: values.comuna_razon_social },
    ];

    if (
      currentStep === 1 &&
      !validateFields(fieldsPerfil) &&
      direction === "next"
    ) {
      return;
    } else if (
      currentStep === 2 &&
      !validateFields(fieldsBanco) &&
      direction === "next"
    ) {
      return;
    } else if (
      currentStep === 3 &&
      !validateFields(fieldsEmpresa) &&
      direction === "next"
    ) {
      return;
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
        return <PerfilForm handleChange={handleChange} values={values} />;
      case 2:
        return <DataBankForm handleChange={handleChange} values={values} />;
      case 3:
        return (
          <EmpresaForm
            handleChange={handleChange}
            values={values}
            rubro={rubro}
            setRubro={setRubro}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Stepper currentStep={currentStep} steps={steps} />
      <div className="border-2 p-4 mt-4 mb-4 rounded-md">
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Spinner />
          </div>
        ) : (
          displayStep(currentStep)
        )}
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
