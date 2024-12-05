import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../src/Contexts/AuthContext";

const PrivateAuthRoute = () => {
  const { isLogged } = useAuth();

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateAuthRoute;
