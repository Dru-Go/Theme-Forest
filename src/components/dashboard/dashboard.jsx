import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preloader from "./preloader";
import SearchBox from "./search-box";
import MainHeader from "./main-header";
import StickyHeader from "./sticky-header";
import BannerSection from "./banner-section";
import ClientsSection from "./clients-section";
import AboutSection from "./about-section";
import FeatureSection from "./features-section";
import PortfolioSection from "./portfolio-section";
import TestamonialSection from "./testimonial-style-two";
import PricingStyle from "./pricing-style-two";
import FactCounter from "./fact-counter";
import NewsSection from "./news-section";
import SubscribeSection from "./subscribe-style-two";
import MainFooter from "./main-footer";
import ScrollToTop from "./scroll-to-top";

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
import NotFoundError from "../error/404";
import Portfolio from "../portfolio/portfolio";
import PortfolioSingle from "../portfolio-single/single"; 

export default function dashboard() {
  return (
    <Router>
      <div>
        {/* Preloader Section */}
        {/* <Route path="/" component={Preloader} /> */}

        {/* <!-- search-box-layout --> */}
        <Route path="/" component={SearchBox} />
        {/* <!-- search-box-layout end --> */}

        {/* <!-- Main Header --> */}
        <header class="main-header style-three">
          {/* <!-- Main Header outer container--> */}
          <Route path="/" component={MainHeader} />

          {/* <!--Sticky Header--> */}
          <Route path="/" component={StickyHeader} />
          {/* <!-- sticky-header end --> */}
        </header>
        {/* <!-- End Main Header --> */}

        {/* <!-- banner-section --> */}
        <Route exact path="/" component={BannerSection} />
        {/* <!-- banner-section end --> */}

        {/* <!-- clients-section --> */}
        <Route exact path="/" component={ClientsSection} />
        {/* <!-- clients-section end --> */}

        {/* <!-- about-section --> */}
        <Route exact path="/" component={AboutSection} />
        {/* <!-- about-section end --> */}

        {/* <!-- feature-section --> */}
        <Route exact path="/" component={FeatureSection} />
        {/* <!-- feature-section end --> */}

        {/* <!-- portfolio-section --> */}
        <Route exact path="/" component={PortfolioSection} />
        {/* <!-- portfolio-section end --> */}

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
        <Route exact path="/404" component={NotFoundError} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/portfolio_single" component={PortfolioSingle} />

        {/* <!-- testimonial-style-two --> */}
        <Route exact path="/" component={TestamonialSection} />
        {/* <!-- testimonial-style-two end --> */}

        {/* <!-- pricing-style-two --> */}
        <Route exact path="/" component={PricingStyle} />
        {/* <!-- pricing-style-two end --> */}

        {/* <!-- fact-counter --> */}
        <Route exact path="/" component={FactCounter} />
        {/* <!-- fact-counter end --> */}

        {/* <!-- news-section --> */}
        <Route exact path="/" component={NewsSection} />
        {/* <!-- news-section --> */}

        {/* <!-- subscribe-style-two --> */}
        <Route exact path="/" component={SubscribeSection} />
        {/* <!-- subscribe-style-two end --> */}

        {/* <!-- main-footer --> */}
        <Route path="/" component={MainFooter} />
        {/* <!-- main-footer end --> */}

        {/* <!--Scroll to top--> */}
        <Route path="/" component={ScrollToTop} />
      </div>
    </Router>
  );
}
