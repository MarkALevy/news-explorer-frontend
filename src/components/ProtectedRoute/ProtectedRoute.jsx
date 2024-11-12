import React from "react";
import { Navigate } from "react-router-dom";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
import { useContext } from "react";

function ProtectedRoute({ children, isLoggedInLoading }) {
  const isLoggedIn = useContext(IsLoggedInContext);
  if (isLoggedInLoading) return null;
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
