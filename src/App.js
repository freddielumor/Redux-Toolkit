import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/store";
import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Users from "./components/Users";
import "./app.scss";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <h1 className="app__heading">
        <a href="/">Redux Toolkit</a>
      </h1>

      <BrowserRouter>
        <Header />

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
