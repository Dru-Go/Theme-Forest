import React from "react";
import PageTitle from "../common/page-title";
import CheckoutSection from "./checkout-section";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function checkout() {
  return (
    <div>
      {/* <!--Page Title--> */}
        <PageTitle title={"Checkout"} title2={"Checkout"} />
      {/* <!--End Page Title--> */}

      {/* <!-- checkout-section --> */}
        <CheckoutSection />
      {/* <!-- checkout-section end --> */}

      {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}

    </div>
  );
}
