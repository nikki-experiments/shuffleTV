import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/Landing";
import Categories from "./views/Categories";
import FourOFour from "./views/FourOFour";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/categories" component={Categories} />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
