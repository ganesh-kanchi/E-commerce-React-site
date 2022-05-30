import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const LockedRoute = ({ children }) => {
  const { isAuthenticated, location } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export { LockedRoute };