import { useEffect } from "react";

export const VerificationCodeInput = ({ inputsRef }) => {
  const handleInput = (e, index) => {
    const { value } = e.target;
    if (value.length === 1) {
      const nextInput = inputsRef.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else if (value.length > 1) {
      e.target.value = value[0];
    }
    console.log(inputsRef.current.map((input) => input.value).join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!e.target.value && index > 0) {
        const prevInput = inputsRef.current[index - 1];
        prevInput.focus();
      } else {
        e.target.value = "";
      }
      console.log(inputsRef.current.map((input) => input.value).join(""));
    }
  };
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    pasteData.split("").forEach((char, index) => {
      const input = inputsRef.current[index];
      if (input) {
        input.value = char;
      }
    });
    e.preventDefault();
    inputsRef.current[Math.min(pasteData.length, 5)].focus();
  };

  useEffect(() => {
    const firstInput = inputsRef.current[0];
    if (firstInput) {
      firstInput.addEventListener("paste", handlePaste);
    }
    return () => {
      if (firstInput) {
        firstInput.removeEventListener("paste", handlePaste);
      }
    };
  }, []);

  return (
    <div className="space-x-2">
      {[...Array(6)].map((_, index) => (
        <input
          key={index}
          id={`code-${index}`}
          type="number"
          className="no-arrows w-8 h-8 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength="1"
          ref={(el) => (inputsRef.current[index] = el)}
          onInput={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};
