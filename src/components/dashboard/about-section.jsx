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
                <h3>About SANE Digital</h3>
              </div>
              <div class="text">
                SANE Digital provides IT solutions by leveraging its proven
                technical knowledge and utilizing its human capital for the
                benefit of its customers.
              </div>
              <ul class="list">
                <li>
                  Partner with customers to understand the information
                  technology needs of their stakeholders
                </li>
                <li>
                  Provide leadership and planning for the effective use of
                  technologies to add value to their AS-IS and TO-BE process
                </li>
                <li>
                  Work diligently to improve and support our customers technical
                  and operational areas
                </li>
              </ul>
              {/* <div class="btn-box">
                <a href="#" class="btn-style-two">
                  Purchase Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
