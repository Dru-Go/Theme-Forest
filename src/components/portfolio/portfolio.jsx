import React from "react";
import PageTitle from "../common/page-title";
import PortfoloSection from "./portfolio-section";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function portfolio() {
  return (
    <div>
      {/* <!--Page Title--> */}
      <PageTitle title={"Our Portfolio"} title2={"Portfolio Type 02"} />
      {/* <!--End Page Title--> */}

      {/* <!-- portfolio-section --> */}
      <PortfoloSection />
      {/* <!-- portfolio-section end --></div> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
