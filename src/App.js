// import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
// import styled from "styled-components";
import {
  About,
  Home,
  SingleProduct,
  Products,
  Cart,
  Error,
  Checkout,
  Private,
  AuthWrapper,
} from "./pages/index";
// import PrivateRoute from "./pages/PrivateRoute";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          ></Route>
          <Private exact path="/checkout">
            <Checkout />
          </Private>
          <Route path="*">
            <Error></Error>
          </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
