import React from "react";
import SubscribeSection from "../dashboard/subscribe-style-two";
import PageTitle from "../common/page-title";
import ShopSection from "./shop-section";
import ScrollToTop from "../dashboard/scroll-to-top";

export default function shop() {
  return (
    <div>
      {/* <!--Page Title--> */}
        <PageTitle title={"Shop Page"} title2={"Shop Page"} />
      {/* <!--End Page Title--> */}

      {/* <!-- shop-section --> */}
        <ShopSection />
      {/* <!-- shop-section end --> */}

      {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
      <ScrollToTop />
    </div>
  );
}
