import React from "react";
import SearchBox from "../dashboard/search-box";
import MainHeader from "../dashboard/main-header";
import StickyHeader from "../dashboard/sticky-header";
import PageTitle from "../common/page-title";
import SubscribeSection from "./subscribe-secton";
import FeatureServiceSection from "./feature-service-section";
import TestamonialServiceSection from "./testamonial-service-section";
import MainFooter from "../dashboard/main-footer";
import ScrollToTop from "../dashboard/scroll-to-top";

export default function services() {
  return (
    <div>
      {/* Preloader Section */}
      {/* <Preloader /> */}

      {/* <!-- search-box-layout --> */}
      <SearchBox />
      {/* <!-- search-box-layout end --> */}

      {/* <!-- Main Header --> */}
      <header class="main-header style-three">
        {/* <!-- Main Header outer container--> */}
        <MainHeader />

        {/* <!--Sticky Header--> */}
        <StickyHeader />
        {/* <!-- sticky-header end --> */}
      </header>
      {/* <!-- End Main Header --> */}

      {/* <!--Page Title--> */}
      <PageTitle title={"Our Services"} title2={"Service type 02"} />
      {/* <!--End Page Title--> */}

      {/* <!-- feature-style-four --> */}
      <FeatureServiceSection />
      {/* <!-- feature-style-four --> */}

      {/* <!-- testimonial-style-five --> */}
      <TestamonialServiceSection />
      {/* <!-- testimonial-style-four end --></div> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}

      {/* <!-- main-footer --> */}
      <MainFooter />
      {/* <!-- main-footer end --> */}

      {/* <!--Scroll to top--> */}
      <ScrollToTop />
    </div>
  );
}
