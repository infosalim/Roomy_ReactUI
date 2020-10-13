import React from "react";
import { Switch, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";
// Components
import Home from "./views/Home/Home";
import Search from "./views/Search/Search";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </Layout>
  );
}

export default App;
