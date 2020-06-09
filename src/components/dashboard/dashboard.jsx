import React from "react";
import Preloader from "./preloader";
import SearchBox from "./search-box";
import MainHeader from "./main-header";
import StickyHeader from "./sticky-header";
import BannerSection from "./banner-section";
import ClientsSection from "./clients-section";
import AboutSection from "./about-section";
import FeatureSection from "./features-section";
import PortfolioSection from "./portfolio-section";
import TestimonialStyle from "./testimonial-style-two";
import PricingStyle from "./pricing-style-two";
import FactCounter from "./fact-counter";
import NewsSection from "./news-section";
import SubscribeStyle from "./subscribe-style-two";
import MainFooter from "./main-footer";
import ScrollToTop from "./scroll-to-top";

export default function dashboard() {
  return (
    <div>
      {/* Preloader Section */}
      {/* <Preloader /> */}

      {/* <!-- search-box-layout --> */}
      <SearchBox />
      {/* <!-- search-box-layout end --> */}

      {/* <!-- Main Header --> */}
      <header class="main-header style-two">
        {/* <!-- Main Header outer container--> */}
        <MainHeader />

        {/* <!--Sticky Header--> */}
        <StickyHeader />
        {/* <!-- sticky-header end --> */}
      </header>
      {/* <!-- End Main Header --> */}

      {/* <!-- banner-section --> */}
      <BannerSection />
      {/* <!-- banner-section end --> */}

      {/* <!-- clients-section --> */}
      <ClientsSection />
      {/* <!-- clients-section end --> */}

      {/* <!-- about-section --> */}
      <AboutSection />
      {/* <!-- about-section end --> */}

      {/* <!-- feature-section --> */}
      <FeatureSection />
      {/* <!-- feature-section end --> */}

      {/* <!-- portfolio-section --> */}
      <PortfolioSection />
      {/* <!-- portfolio-section end --> */}

      {/* <!-- testimonial-style-two --> */}
      <TestimonialStyle />
      {/* <!-- testimonial-style-two end --> */}

      {/* <!-- pricing-style-two --> */}
      <PricingStyle />
      {/* <!-- pricing-style-two end --> */}

      {/* <!-- fact-counter --> */}
      <FactCounter />
      {/* <!-- fact-counter end --> */}

      {/* <!-- news-section --> */}
      <NewsSection />
      {/* <!-- news-section --> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeStyle />
      {/* <!-- subscribe-style-two end --> */}

      {/* <!-- main-footer --> */}
      <MainFooter />
      {/* <!-- main-footer end --> */}

      {/* <!--Scroll to top--> */}
      <ScrollToTop/>
    </div>
  );
}
