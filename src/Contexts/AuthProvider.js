import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const FirebaseContexts = useFirebase();
  return (
    <AuthContext.Provider value={FirebaseContexts}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
