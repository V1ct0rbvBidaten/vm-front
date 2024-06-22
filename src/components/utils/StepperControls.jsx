import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React from "react";

const StepperControls = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="flex justify-between">
      {currentStep === 1 ? (
        <span></span>
      ) : (
        <Button
          onClick={() => handleClick()}
          variant="ghost"
          size="sm"
          startContent={<ChevronLeftIcon className="h-4" />}
        >
          Atras
        </Button>
      )}

      <Button
        onClick={() => handleClick("next")}
        className="bg-emerald-500 text-white"
        size="sm"
        endContent={<ChevronRightIcon className="h-4" />}
      >
        {currentStep === steps.length ? "Guardar" : "Siguiente"}
      </Button>
    </div>
  );
};

export default StepperControls;
