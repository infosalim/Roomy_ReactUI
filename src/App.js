import React from "react";
import { Switch, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";
// Components
import Home from "./views/Home/Home";
import Search from "./views/Search/Search";
import ExtraService from "./views/ExtraService/ExtraService";
import Contact from "./views/Contact/Contact";
import Hotel from "./views/Hotel/Hotel";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/extra-service" exact component={ExtraService} />
        <Route path="/contact-us" exact component={Contact} />
        <Route path="/hotel" exact component={Hotel} />
      </Switch>
    </Layout>
  );
}

export default App;
