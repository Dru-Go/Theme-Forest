import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRoutes from "./routes";
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
        <MainRoutes />
        {/* <!-- main-footer --> */}
        <Route path="/" component={MainFooter} />
        {/* <!-- main-footer end --> */}
        {/* <!--Scroll to top--> */}
        <Route path="/" component={ScrollToTop} />
      </div>
    </Router>
  );
}
