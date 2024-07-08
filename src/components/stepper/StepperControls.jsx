import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React from "react";

const StepperControls = ({
  handleClick,
  currentStep,
  steps,
  handleSubmit,
  handleSubmitText,
}) => {
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

      {currentStep === steps.length ? (
        <Button
          onClick={handleSubmit}
          className="bg-sky-700 text-white"
          size="sm"
        >
          {handleSubmitText}
        </Button>
      ) : (
        <Button
          onClick={() => handleClick("next")}
          className="bg-sky-700 text-white"
          size="sm"
          endContent={<ChevronRightIcon className="h-4" />}
        >
          Siguiente
        </Button>
      )}
    </div>
  );
};

export default StepperControls;
