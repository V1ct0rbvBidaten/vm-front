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
