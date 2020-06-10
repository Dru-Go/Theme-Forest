/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function aboutSection() {
  return (
    <section class="about-section style-two">
      <div class="anim-icon">
        <div class="icon icon-1 float-bob-y"></div>
        <div class="icon icon-2 rotate-me"></div>
        <div class="icon icon-3 rotate-me"></div>
        <div class="icon icon-4 float-bob-y"></div>
        <div class="icon icon-5"></div>
        <div class="icon icon-6"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 video-column">
            <div
              class="video-content clearfix"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <figure class="image">
                <img src="images/resource/about-2.jpg" alt="" />
              </figure>
              <div
                class="video-icon wow zoomIn"
                data-wow-delay="2000ms"
                data-wow-duration="1500ms"
              >
                <a
                  href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                  class="overlay-link lightbox-image"
                  data-caption=""
                >
                  <i class="fa fa-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12 content-column">
            <div class="content-box">
              <div class="sec-title">
                <h4>About Rivox</h4>
                <h1>Rivox tells you a lot about your website.</h1>
              </div>
              <div class="text">
                Dolor sit amet consectetur elit sed do eiusmod tempor incid
                idunt labore dolore magna aliqua enim ad minim veniam quis
                nostrud exercitation ullamco.
              </div>
              <ul class="list">
                <li>Various Analysis Options</li>
                <li>Page Load Details (time, size, number of requests)</li>
                <li>Waterfall, Video and Report History</li>
              </ul>
              <div class="btn-box">
                <a href="#" class="btn-style-two">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
