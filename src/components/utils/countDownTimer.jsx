import React, { useState, useEffect } from 'react';

export const CountdownTimer = ({time}) => {
    const [timeLeft, setTimeLeft] = useState(time); // 300 seconds = 5 minutes
  
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