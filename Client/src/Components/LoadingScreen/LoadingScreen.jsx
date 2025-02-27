import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [dots, setDots] = useState(".");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 1 : prev));
    }, 50);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0C0E2B] space-y-6 z-50">
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-gradientSpin">
          <div className="w-full h-full bg-[conic-gradient(#3B82F6_20%,#1D4ED8_50%,#3B82F6_80%)] opacity-20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Spinner */}
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-primaryColor/20 rounded-full"></div>

          {/* Animated Arc */}
          <div className="absolute inset-0 border-4 border-t-primaryColor border-transparent rounded-full animate-spin"></div>

          {/* Inner Logo/Icon */}
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-16 h-16 bg-primaryColor rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primaryColor to-blue-400 bg-clip-text text-transparent">
            Loading{dots}
          </h2>
          <p className="text-gray-400 text-sm">
            Preparing Elshaddai Apostolic Mission Pages
          </p>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primaryColor transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-gray-400 text-sm">{progress}%</p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primaryColor rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 3s infinite ${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
