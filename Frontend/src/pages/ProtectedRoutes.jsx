import { Navigate, replace } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const email = JSON.parse(localStorage.getItem("loginEmail"));

  return email ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
