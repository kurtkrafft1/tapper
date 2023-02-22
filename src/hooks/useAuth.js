import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage("authToken", null);
  const navigate = useNavigate();

  const login = async (data) => {
    console.log("login", data);
    setAuthToken(data);
    navigate("/");
  };

  const logout = () => {
    console.log("logout");
    setAuthToken(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      authToken,
      login,
      logout,
    }),
    [authToken]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
