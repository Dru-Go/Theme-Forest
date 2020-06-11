import React from "react";
import SearchBox from "../dashboard/search-box";
import MainHeader from "../dashboard/main-header";
import StickyHeader from "../dashboard/sticky-header";
import ScrollToTop from "../dashboard/scroll-to-top";

export default function notFoundError() {
  return (
    <div>
      {/* Preloader Section */}
      {/* <Preloader /> */}

      {/* <!-- search-box-layout --> */}
      <SearchBox />
      {/* <!-- search-box-layout end --> */}

      {/* <!-- Main Header --> */}
      <header class="main-header style-three error-page">
        {/* <!-- Main Header outer container--> */}
        <MainHeader />

        {/* <!--Sticky Header--> */}
        <StickyHeader />
        {/* <!-- sticky-header end --> */}
      </header>
      {/* <!-- End Main Header --> */}

      {/* <!-- error-section --> */}
      <section class="error-section">
        <div class="container">
          <div class="content-box centred">
            <figure class="error-image">
              <img src="images/resource/error.png" alt="" />
            </figure>
            <div class="sec-title">
              <h1>
                Oops, this page could
                <br />
                not be found!
              </h1>
            </div>
            <div class="btn-box">
              <a href="index.html" class="btn-style-two">
                Back Home
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- error-section end --> */}
      {/* <!--Scroll to top--> */}
      <ScrollToTop />
    </div>
  );
}
