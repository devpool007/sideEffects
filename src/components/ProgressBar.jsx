import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
  const [remianingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remianingTime} max={timer} />;
}
