import React from 'react'
import PageTitle from "../common/page-title";
import TeamSection from "./team-style-three";
import SubscribeSection from "./subscribe-style-two";

export default function teams() {
    return (
      <div>

        {/* <!--Page Title--> */}
        <PageTitle title={"Our Team"} title2={"Team type 02"} />
        {/* <!--End Page Title--> */}

        {/* <!-- team-style-three --> */}
        <TeamSection />
        {/* <!-- team-style-three end --> */}

        {/* <!-- subscribe-style-two --> */}
        <SubscribeSection />
        {/* <!-- subscribe-style-two end --> */}
      </div>
    );
}
