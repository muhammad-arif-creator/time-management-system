import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./_components/ProtectedRoute";
import ViewLogs from "./_components/View_logs";
import NotFound from "./_components/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <ProtectedRoute exact path="/dashboard" component={DashboardPage} />
          <ProtectedRoute exact path="/view-logs/:id" component={ViewLogs} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
