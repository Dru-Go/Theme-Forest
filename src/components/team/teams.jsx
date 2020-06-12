import React from 'react'
import SearchBox from "../dashboard/search-box";
import MainHeader from "../dashboard/main-header";
import StickyHeader from "../dashboard/sticky-header";
import PageTitle from "../common/page-title";
import TeamSection from "./team-style-three";
import SubscribeSection from "./subscribe-style-two";
import MainFooter from "../dashboard/main-footer";
import ScrollToTop from "../dashboard/scroll-to-top";

export default function teams() {
    return (
      <div>
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
        <PageTitle title={"Our Team"} title2={"Team type 02"} />
        {/* <!--End Page Title--> */}

        {/* <!-- team-style-three --> */}
        <TeamSection />
        {/* <!-- team-style-three end --> */}

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
