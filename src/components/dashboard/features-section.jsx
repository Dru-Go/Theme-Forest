import React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function featureSection() {
  return (
    <section class="feature-section style-two centred">
      <div class="anim-icon">
        <div class="icon icon-1 rotate-me"></div>
        <div class="icon icon-2 rotate-me"></div>
        <div class="icon icon-3 rotate-me"></div>
        <div class="icon icon-4 float-bob-y"></div>
        <div class="icon icon-5 float-bob-x"></div>
      </div>
      <div class="container">
        <div class="sec-title">
          <h4>Services</h4>
          <h1>
            The Best Business Solutions
            <br />
            Guide for You
          </h1>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div class="feature-block-one">
              <div class="inner-box">
                <figure class="icon-box">
                  <img src="images/icons/icon-1.png" alt="" />
                </figure>
                <h2>
                  <a href="#">
                    Online
                    <br />
                    Merketing
                  </a>
                </h2>
                <div class="text">
                  Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                  tempor incididunt ut labore.
                </div>
                <div class="btn-box">
                  <a href="#" class="btn-style-three">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div class="feature-block-one">
              <div class="inner-box">
                <figure class="icon-box">
                  <img src="images/icons/icon-2.png" alt="" />
                </figure>
                <h2>
                  <a href="#">Real-time data analytics</a>
                </h2>
                <div class="text">
                  Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                  tempor incididunt ut labore.
                </div>
                <div class="btn-box">
                  <a href="#" class="btn-style-three">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div class="feature-block-one">
              <div class="inner-box">
                <figure class="icon-box">
                  <img src="images/icons/icon-3.png" alt="" />
                </figure>
                <h2>
                  <a href="#">
                    Speed
                    <br />
                    Optimization
                  </a>
                </h2>
                <div class="text">
                  Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod
                  tempor incididunt ut labore.
                </div>
                <div class="btn-box">
                  <a href="#" class="btn-style-three">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
