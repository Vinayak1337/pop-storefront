import React from "react";
import Categoryfilter from "./Categoryfilter";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Productlist from "./Productlist";
import Shopbanner from "./Shopbanner";

function Shop() {
  return (
    <div>
      <Header />
      <Navigation />
      <Shopbanner />
      <div className="container">
        <div className="row">
          <Categoryfilter />
          <Productlist />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
