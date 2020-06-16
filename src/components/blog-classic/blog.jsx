import React from "react";
import PageTitle from "../common/page-title";
import BlogClassicSection from "./blog-section";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function blog() {
    return (
      <div>

        {/* <!--Page Title--> */}
        <PageTitle title={"Blog Classic"} title2={"Blog Page"} />
        {/* <!--End Page Title--> */}

        {/* <!-- blog-classic --> */}
        <BlogClassicSection />
        {/* <!-- blog-classic --> */}

        {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
        {/* <!-- subscribe-style-two end --> */}
      </div>
    );
}
