import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import "./App.css";

import Home from "./screens/Home";
import Details from "./screens/Details";

const App = () => {
  const location = useLocation();

  return (
    <main style={{ overflowX: "hidden" }}>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </AnimatePresence>
    </main>
  );
};

export default App;
