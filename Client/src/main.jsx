import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Contexts/AuthContext.jsx"; // Import AuthProvider
import { BrowserRouter } from "react-router-dom"; // Only import here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-bodyBg-dark">
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
