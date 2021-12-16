import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  //   const { user } = useAuth();
  //   let location = useLocation();

  return children;
};

export default PrivateRoute;
