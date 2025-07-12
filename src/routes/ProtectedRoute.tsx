import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}
