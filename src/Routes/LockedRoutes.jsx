import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const LockedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export { LockedRoute };