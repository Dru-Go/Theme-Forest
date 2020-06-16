/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PageTitle from "../common/page-title";
import CartSection from "./cart-section";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function cart() {
  return (
    <div>
      {/* <!--Page Title--> */}
        <PageTitle title={"Cart Page"} title2={"Cart Page"} />
      {/* <!--End Page Title--> */}

      {/* <!-- cart section --> */}
        <CartSection />
      {/* <!-- cart section end --> */}

      {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}

    </div>
  );
}
