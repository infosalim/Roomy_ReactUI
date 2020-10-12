import React from "react";
import { Switch, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";
// Components
import Home from "./views/Home/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
