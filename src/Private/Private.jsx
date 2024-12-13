import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { users } = useContext(AuthContext);
  const location = useLocation();

  if (users) {
    return children;
  }

  
  return <Navigate to="/login" state={{ from: location }} replace />;
  //  navigate("/login", { state: { from: location } });
};

export default Private;
