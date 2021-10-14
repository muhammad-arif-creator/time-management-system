import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  let flag;
  if (isAuthenticated === "true") {
    flag = true;
  } else {
    flag = false;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        flag ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
