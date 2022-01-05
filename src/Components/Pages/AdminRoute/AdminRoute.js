import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, isAdmin } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <img src="https://c.tenor.com/8KWBGNcD-zAAAAAC/loader.gif" alt="" />
        </div>
      </div>
    );
  }

  if (!user.email && !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default AdminRoute;
