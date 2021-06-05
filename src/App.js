import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Shopping from "./Component/Shopping";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import LandingPage from "./Component/LandingPage";
import DetailCart from "./Component/DetailCart";

function App() {
  return (
    <BrowserRouter>
      <div className="bungkus">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/detailCard/:id" component={DetailCart} />
          <Route path="/shop" component={Shopping} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
