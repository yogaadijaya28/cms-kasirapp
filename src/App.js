import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import {
  HomeContainer,
  CreateUserContainer,
  EditUserContainer,
  DetailUserContainer,
} from "./containers";

import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponent />
          <br />
          <main>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/create" component={CreateUserContainer} />
            <Route path="/edit/:id" component={EditUserContainer} />
            <Route path="/detail/:id" component={DetailUserContainer} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
