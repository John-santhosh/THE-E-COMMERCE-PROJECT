import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";
import {
  About,
  Home,
  SingleProduct,
  Products,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages/index";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route
          exact
          path="/products/:id"
          children={<SingleProduct></SingleProduct>}
        ></Route>
        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
