import React from "react";
import SearchBox from "../dashboard/search-box";
import MainHeader from "../dashboard/main-header";
import StickyHeader from "../dashboard/sticky-header";
import PageTitle from "../common/page-title";
import ServiceSection from "./service-style-four";
import ChooseSection from "./chooseus-section";
import FactCounter from "../dashboard/fact-counter";
import TeamsSection from "./team-style-two";
import TestamonialSection from "./testimonial-style-four";
import SubscribeSection from "../dashboard/subscribe-style-two";
import MainFooter from "../dashboard/main-footer";
import ScrollToTop from "../dashboard/scroll-to-top";

export default function about() {
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
      <PageTitle title={"About Us"} title2={"About type 02"} />
      {/* <!--End Page Title--> */}

      {/* <!-- service-style-four --> */}
      <ServiceSection />
      {/* <!-- service-style-four end --> */}

      {/* <!-- chooseus-section --> */}
      <ChooseSection />
      {/* <!-- chooseus-section end --> */}

      {/* <!-- fact-counter --> */}
      <FactCounter />
      {/* <!-- fact-counter end --> */}

      {/* <!-- team-style-two --> */}
      <TeamsSection />
      {/* <!-- team-style-two end --> */}

      {/* <!-- testimonial-style-four --> */}
      <TestamonialSection />
      {/* <!-- testimonial-style-four end --> */}

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
