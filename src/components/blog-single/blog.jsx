import React from "react";
import PageTitle from "../common/page-title";
import BlogSingleSection from "./blog-section";
import SubscribeSection from "../dashboard/subscribe-style-two";


export default function blog() {
  return (
    <div>

      {/* <!--Page Title--> */}
      <PageTitle title={"Blog Single"} title2={"Blog Page"} />
      {/* <!--End Page Title--> */}

      {/* <!-- blog-classic --> */}
      <BlogSingleSection />
      {/* <!-- blog-classic --> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}

    </div>
  );
}
