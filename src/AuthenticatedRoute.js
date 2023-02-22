import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const AuthenticatedRoute = ({ children }) => {
  const { authToken } = useAuth();
  if (!authToken) {
    console.log("no auth token");
    return <Navigate to="/login" />;
  }
  return children;
};
