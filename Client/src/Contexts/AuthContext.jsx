import React, { useState, useEffect, useContext } from "react";
import getAuth from "../util/userAuthHeader";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const loggedInUser = await getAuth();

        if (loggedInUser && loggedInUser?.user_token) {
          setIsLogged(true);
          setUser(loggedInUser);
          setUserType(loggedInUser.user_role);
        } else {
          setIsLogged(false);
          setUser(null);
          setUserType(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsLogged(false);
        setUser(null);
        setUserType(null);
      }
    };

    checkAuth();
  }, [isLogged, userType]);

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    setUserType(null);
    localStorage.removeItem("authToken");
  };

  const value = {
    isLogged,
    user,
    userType,
    setIsLogged,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
