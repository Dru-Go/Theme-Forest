import React from "react";
import ServiceSection from "./service-style-four";
import ChooseSection from "./chooseus-section";
import FactCounter from "../dashboard/fact-counter";
import TeamsSection from "./team-style-two";
import TestamonialSection from "./testimonial-style-four";
import SubscribeSection from "../dashboard/subscribe-style-two";
export default function about() {
  return (
    <div>
      {/* <!-- service-style-four --> */}
      <ServiceSection />
      {/* <!-- service-style-four end --> */}

      {/* <!-- chooseus-section --> */}
      <ChooseSection />
      {/* <!-- chooseus-section end --> */}

      {/* <!-- fact-counter --> */}
      <FactCounter />
      {/* <!-- fact-counter end --> */}

      {/* <!-- team-style-two --> */}
      <TeamsSection />
      {/* <!-- team-style-two end --> */}

      {/* <!-- testimonial-style-four --> */}
      <TestamonialSection />
      {/* <!-- testimonial-style-four end --> */}

      {/* <!-- subscribe-style-two --> */}
      <SubscribeSection />
      {/* <!-- subscribe-style-two end --> */}
    </div>
  );
}
