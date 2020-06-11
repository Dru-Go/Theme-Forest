import React from "react";
import SearchBox from "../dashboard/search-box";
import MainHeader from "../dashboard/main-header";
import StickyHeader from "../dashboard/sticky-header";
import PageTitle from "./page-title";
import BlogSingleSection from "./blog-section";
import SubscribeSection from "../dashboard/subscribe-style-two";
import MainFooter from "../dashboard/main-footer";
import ScrollToTop from "../dashboard/scroll-to-top";


export default function blog() {
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
      <PageTitle />
      {/* <!--End Page Title--> */}

      {/* <!-- blog-classic --> */}
      <BlogSingleSection />
      {/* <!-- blog-classic --> */}

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
