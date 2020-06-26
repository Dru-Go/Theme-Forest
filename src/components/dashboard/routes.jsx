import React from "react";
import Services from "../services/services";
import About from "../about/about";
import Teams from "../team/teams";
import Faq from "../faq/faq";
import Shop from "../shop/shop";
import SingleShop from "../shop-singles/singles";
import BlogClassic from "../blog-classic/blog";
import BlogGrid from "../blog-grid/blog";
import BlogSingle from "../blog-single/blog";
import Cart from "../cart/cart";
import Checkout from "../checkout/checkout";
import Contacts from "../contacts/contacts"; // Maps is not being desplayed
import Portfolio from "../portfolio/portfolio";
import PortfolioSingle from "../portfolio-single/single";
import { Route } from "react-router-dom";

export default function routes() {
  return (
    <>
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={About} />
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/singleShop" component={SingleShop} />
      <Route exact path="/blogClassic" component={BlogClassic} />
      <Route exact path="/blogGrid" component={BlogGrid} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/blogSingle" component={BlogSingle} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/portfolio_single" component={PortfolioSingle} />
    </>
  );
}
