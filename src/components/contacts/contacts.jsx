import React from "react";
import SearchBox from "../dashboard/search-box";
import MainHeader from "../dashboard/main-header";
import StickyHeader from "../dashboard/sticky-header";
import PageTitle from "../common/page-title";
import ContactSection from "./contacts-section";
import MapsSection from "./google-maps";
import SubscribeSection from "../dashboard/subscribe-style-two";
import MainFooter from "../dashboard/main-footer";
import ScrollToTop from "../dashboard/scroll-to-top";

export default function contacts() {
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
      <PageTitle title={"Contact us"} title2={"Contact us"} />
      {/* <!--End Page Title--> */}

      {/* <!-- contact-section --> */}
      <ContactSection />
      {/* <!-- contact-section end --> */}

      {/* <!-- google-map --> */}
      <MapsSection />
      {/* <!-- google-map end --> */}

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
