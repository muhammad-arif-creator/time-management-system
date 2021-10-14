import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./_components/ProtectedRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
