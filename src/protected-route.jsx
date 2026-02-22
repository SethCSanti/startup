import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user || user === "Guest") {
    return <Navigate to="/" replace />;
  }

  return children;
}