import React from "react";
import PageTitle from "../common/page-title";
import PortfolioSingleSection from "./portfolio-section";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function single() {
  return (
    <div>
      {/* <!--Page Title--> */}
      <PageTitle title={"Portfolio Single"} title2={"Portfolio Single 02"} />
      {/* <!--End Page Title--> */}

      {/* <!-- portfolio-single --> */}
      <PortfolioSingleSection />
      {/* <!-- portfolio-single end --> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
