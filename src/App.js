/* eslint-disable no-unused-vars */
import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import Services from "./components/services/services";
import About from "./components/about/about";
import Teams from "./components/team/teams";
import Faq from "./components/faq/faq";
import Shop from "./components/shop/shop";
import SingleShop from "./components/shop-singles/singles";
import BlogClassic from "./components/blog-classic/blog";
import BlogGrid from "./components/blog-grid/blog";
import BlogSingle from "./components/blog-single/blog";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";
import Contacts from "./components/contacts/contacts"; // Maps is not being desplayed
import NotFoundError from "./components/error/404"; 
import Portfolio from "./components/portfolio/portfolio"; 
import PortfolioSingle from "./components/portfolio-single/single"; 

function App() {
  return <Dashboard />;
}

export default App;
