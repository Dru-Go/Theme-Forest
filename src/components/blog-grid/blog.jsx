import React from "react";
import PageTitle from "../common/page-title";
import BlogGridSection from "./blog-section";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function blog() {
  return (
    <div>
      {/* <!--Page Title--> */}
        <PageTitle title={"Blog Grid"} title2={"Blog Page"} />
      {/* <!--End Page Title--> */}

      {/* <!-- blog-grid -->< */}
        <BlogGridSection />
      {/* <!-- blog-grid -->< */}

      {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
