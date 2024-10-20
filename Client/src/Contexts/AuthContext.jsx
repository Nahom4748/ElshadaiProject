// src/Contexts/AuthContext.js

import React, { useState, useEffect, useContext } from "react";
import getAuth from "../util/userAuthHeader";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedInUser = await getAuth();
      console.log(loggedInUser);
      if (loggedInUser.user_token) {
        setIsLogged(true);
        setUser(loggedInUser);
        setUserType(loggedInUser.company_role_name);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    setIsLogged(false);
    setIsAdmin(false);
    setEmployee(null);
    localStorage.removeItem("authToken");
  };

  const value = {
    isLogged,
    setIsLogged,
    user,
    setUser,
    logout,
    userType,
    setUserType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
