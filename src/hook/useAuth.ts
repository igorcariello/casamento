import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthProvider";

function useAuth() {
  const context = useContext(AuthContext) as AuthContextType;
  return context;
}

export { useAuth }