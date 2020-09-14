import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Home from "./Components/Pages/home";
import Portfolio from "./Components/Pages/portfolio";

import "./style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
