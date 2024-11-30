import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Contexts/AuthContext.jsx"; // Import AuthProvider

createRoot(document.getElementById("root")).render(
  <div className="bg-bodyBg-dark">
    <AuthProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthProvider>
  </div>
);
