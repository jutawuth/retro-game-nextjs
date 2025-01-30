import { useState, useEffect } from "react";

const time = 10
export default function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(time); // 15 secs in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  
  useEffect(() => {
    setIsRunning(true)
   
  }, [ ]);

  return (
     
      <p className="  font-bold mb-4 w-full text-left p-1 pl-4 text-red-500">{formatTime(timeLeft)}</p>
 
  );
}
