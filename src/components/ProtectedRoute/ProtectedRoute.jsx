import { Navigate } from "react-router-dom";
import { IsLoggedInContext } from "../../contexts/IsLoggedInContext";
import { useContext } from "react";

function ProtectedRoute({ children }) {
  const isLoggedIn = useContext(IsLoggedInContext);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
