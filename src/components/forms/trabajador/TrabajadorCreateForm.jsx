import { useState } from "react";
import InformacionPersonalSeccionForm from "./InformacionPersonalForm";
import DatosIngresoForm from "./DatosIngresoForm";
import DatosContactoForm from "./DatosContactoForm";
import Stepper from "../../utils/Stepper";
import StepperControls from "../../utils/StepperControls";
import Finalizar from "./Finalizar";
import LibretaForm from "./LibretaForm";

const TrabajadorCreateForm = ({
  values,
  handleChange,
  handleSubmit,
  cargos,
  empresas,
  empresaValue,
  setEmpresaValue,
  cargoValue,
  setCargoValue,
  setValues,
  muellajeCheck,
  setMuellajeCheck,
  gestionMandoCheck,
  setGestionMandoCheck,
  habilitaciones,
  cursos,
  titulos,
  habilitacionesArray,
  setHabilitacionesArray,
  cursosArray,
  setCursosArray,
  titulosArray,
  setTitulosArray,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Datos Personales",
    "Datos de Contacto",
    "Datos de Ingreso",
    "Libreta Embarco",
    "Finalizar",
  ];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep < steps.length + 1 && setCurrentStep(newStep);
  };

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <InformacionPersonalSeccionForm
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );

      case 2:
        return (
          <DatosContactoForm
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
          />
        );
      case 3:
        return (
          <DatosIngresoForm
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            empresas={empresas}
            cargos={cargos}
            empresaValue={empresaValue}
            setEmpresaValue={setEmpresaValue}
            cargoValue={cargoValue}
            setCargoValue={setCargoValue}
          />
        );

      case 4:
        return (
          <LibretaForm
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            muellajeCheck={muellajeCheck}
            setMuellajeCheck={setMuellajeCheck}
            gestionMandoCheck={gestionMandoCheck}
            setGestionMandoCheck={setGestionMandoCheck}
            setValues={setValues}
            habilitaciones={habilitaciones}
            cursos={cursos}
            titulos={titulos}
            habilitacionesArray={habilitacionesArray}
            setHabilitacionesArray={setHabilitacionesArray}
            cursosArray={cursosArray}
            setCursosArray={setCursosArray}
            titulosArray={titulosArray}
            setTitulosArray={setTitulosArray}
          />
        );
      case 5:
        return (
          <Finalizar
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            values={values}
            cargoValue={cargoValue}
            empresaValue={empresaValue}
            cargos={cargos}
            empresas={empresas}
          />
        );
    }
  };

  return (
    <>
      <div className="grid gap-6 p-4 ">
        <Stepper currentStep={currentStep} steps={steps} />
        <div className="border-2 p-4 mt-4 rounded-md">
          {displayStep(currentStep)}
        </div>
        {currentStep !== steps.length && (
          <StepperControls
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </>
  );
};

export default TrabajadorCreateForm;
