import { CheckIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      // Current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // Future steps
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      return stepObj;
    });
    stepRef.current = stepsState;
    const currentSteps = updateStep(currentStep - 1, stepsState);
    setNewStep(currentSteps);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={`flex items-center  ${
          index !== newStep.length - 1 ? "w-full" : ""
        } ${index !== newStep.length - 1 ? "sm:w-auto" : ""}`}
      >
        <div className="relative flex   sm:flex-col items-center justify-center text-teal-600 sm:mb-0 mb-8">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2
              border-gray-300 h-10 w-10 flex items-center 
              justify-center
              ${
                step.selected
                  ? "bg-sky-600 text-white font-bold border border-sky-600"
                  : ""
              }
              `}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">
                <CheckIcon className="h-4" />
              </span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`capitalize  absolute top-0  text-center mt-12 w-[100px] text-xs font-medium  ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        {index !== newStep.length - 1 && (
          <div
            className={` hidden sm:block flex-auto border-t-2 transition duration-500 ease-in-out ${
              step.completed ? "border-sky-600" : "border-gray-300"
            }`}
          ></div>
        )}
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex  sm:flex-row justify-between items-center   sm:space-y-0 sm:space-x-4 mb-14">
      {displaySteps}
    </div>
  );
};

export default Stepper;
