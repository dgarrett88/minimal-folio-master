import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sass/_app.scss";
import "./sass/main.scss";

// Components
import Layout from "./layout/Layout";

// Functional components
import RouteTracker from "./components/functional/RouteTracker";

const App = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const [routeHistory, setRouteHistory] = useState([]);

  useEffect(() => {
    console.log("Route history:", routeHistory);
  }, [routeHistory]);

  return (
    <Router>
      <RouteTracker setActiveRoute={setActiveRoute} setRouteHistory={setRouteHistory} />
      <Layout activeRoute={activeRoute} routeHistory={routeHistory} />
    </Router>
  );
};

export default App;
