import React from "react";
import SubscribeSection from "../dashboard/subscribe-style-two";
import PageTitle from "../common/page-title";
import SingleSection from "./singles-section";
export default function singles() {
  return (
    <div>
      {/* <!--Page Title--> */}
      <PageTitle title={"Single Shop"} title2={"Single Shop"} />
      {/* <!--End Page Title--> */}

      {/* <!-- single-shop --> */}
      <SingleSection />
      {/* <!-- single-shop end --> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
