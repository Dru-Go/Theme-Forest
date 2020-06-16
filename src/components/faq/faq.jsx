import React from "react";
import SubscribeSection from "../dashboard/subscribe-style-two";
import PageTitle from "../common/page-title";
import FaqSection from "./faq-section";

export default function faq() {
  return (
    <div>
      {/* <!--Page Title--> */}
        <PageTitle title={"Faq Page"} title2={"Faq Page"} />
      {/* <!--End Page Title--> */}

      {/* <!-- faq-secttion --> */}
        <FaqSection />
      {/* <!-- faq-section end --> */}

      {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
