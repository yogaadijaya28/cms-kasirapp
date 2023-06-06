import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import {
  HomeContainer,
  CreateUserContainer,
  EditUserContainer,
  DetailUserContainer,
} from "./containers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    brandTitle: "DAL Tour & Travel CMS ",
    users: [
      {
        id: 1,
        name: "Justin Xavier",
        domicile: "America",
        age: 27,
        contact: "081321000651",
      },
      {
        id: 2,
        name: "Justin Beliveber",
        domicile: "San fransisco",
        age: 25,
        contact: "081123000651",
      },
      {
        id: 3,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 4,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 5,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 6,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 7,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 8,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 9,
        name: " Adam  Xavier",
        domicile: "America",
        age: 22,
        contact: "081321000156",
      },
      {
        id: 10,
        name: " Sabrina",
        domicile: "Washington DC",
        age: 19,
        contact: "081321000156",
      },
      {
        id: 11,
        name: " Xabiru ",
        domicile: "Long Angles",
        age: 29,
        contact: "081321000156",
      },
      {
        id: 12,
        name: " Adam Levis",
        domicile: "London",
        age: 21,
        contact: "081321000156",
      },
    ],
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavbarComponent dataTitle={this.state.brandTitle} />
          <br />
          <main>
            <Routes>
              <Route
                path="/"
                element={<HomeContainer users={this.state.users} />}
                // 
              />

              <Route path="/create" element={<CreateUserContainer />} />
              <Route path="/edit/:id" element={<EditUserContainer />} />
              <Route path="/detail/:id" element={<DetailUserContainer />} />
            </Routes>
          </main>
        </BrowserRouter>
     
      </div>
    );
  }
}
