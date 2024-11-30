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
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const loggedInUser = await getAuth();
        console.log(loggedInUser);

        if (loggedInUser && loggedInUser?.user_token) {
          setIsLogged(true);
          setUser(loggedInUser);
          setUserType(loggedInUser.user_role);
          console.log("User Role:", loggedInUser.user_role);
        } else {
          // Clear state if not authenticated
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
  }, [userType, isLogged]);

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    setUserType(null);
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
