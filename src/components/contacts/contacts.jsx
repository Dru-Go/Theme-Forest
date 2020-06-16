import React from "react";
import PageTitle from "../common/page-title";
import ContactSection from "./contacts-section";
import MapsSection from "./google-maps";
import SubscribeSection from "../dashboard/subscribe-style-two";

export default function contacts() {
  return (
    <div>
      {/* <!--Page Title--> */}
        <PageTitle title={"Contact us"} title2={"Contact us"} />
      {/* <!--End Page Title--> */}

      {/* <!-- contact-section --> */}
        <ContactSection />
      {/* <!-- contact-section end --> */}

      {/* <!-- google-map --> */}
        <MapsSection />
      {/* <!-- google-map end --> */}

      {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
