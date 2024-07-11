import React, { useState, useEffect, useRef } from 'react';
export const version = [
  {
    version: "0.0.6",
    fecha: "04/16/2024",
    contenido: [
      {
        titulo: "Listado creación de buques",
        descripcion: "Se ha agregado listado en creación y edición de buques.",
      },
    ],
  },
  {
    version: "0.0.5",
    fecha: "04/14/2024",
  },
];


export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{timeLeft <= 0 ? '00:00' : formatTime(timeLeft)}</h1>
    </div>
  );
}

export const VerificationCodeInput = ({ verificationCode, setVerificationCode }) => {
    const inputsRef = useRef([]);
  
    useEffect(() => {
      inputsRef.current[0]?.focus();
    }, []);
  
    const handleInput = (e, index) => {
      const { value } = e.target;
      if (/^\d$/.test(value)) {
        const newVerificationCode = [...verificationCode];
        newVerificationCode[index] = value;
        setVerificationCode(newVerificationCode);
  
        if (index < 5) {
          inputsRef.current[index + 1].focus();
        }
      } else {
        e.target.value = '';
      }
    };
  
    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && index > 0 && !e.target.value) {
        inputsRef.current[index - 1].focus();
      }
    };
  
    const handlePaste = (e) => {
      const pastedData = e.clipboardData.getData('text').slice(0, 6); // Limitar a 6 caracteres
      const newVerificationCode = [...verificationCode];
      const validPastedData = pastedData.split('').filter(char => /^\d$/.test(char));
  
      validPastedData.forEach((char, index) => {
        if (inputsRef.current[index]) {
          inputsRef.current[index].value = char;
          newVerificationCode[index] = char;
        }
      });
      setVerificationCode(newVerificationCode);
      inputsRef.current[Math.min(validPastedData.length, 5)].focus();
      e.preventDefault();
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            className="no-arrows w-8 h-8 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="1"
            ref={el => inputsRef.current[index] = el}
            onInput={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              margin: '0 5px',
              fontSize: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        ))}
      </div>
    );
  };
  
  