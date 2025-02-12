import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0C0E2B] text-white text-2xl font-bold transition-opacity duration-500 animate-fadeIn">
      <span className="animate-pulse">
        Loading<span className="animate-bounce">{dots}</span>
      </span>
    </div>
  );
};

export default LoadingScreen;
