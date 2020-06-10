import React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function bannerSection() {
  return (
    <section class="banner-section style-two">
      <div class="anim-icon">
        <div class="icon icon-2"></div>
        <div class="icon icon-5"></div>
        <div class="icon icon-6"></div>
        <div class="icon icon-7"></div>
        <div class="icon icon-8 rotate-me"></div>
        <div class="icon icon-9 rotate-me"></div>
        <div class="icon icon-10"></div>
        <div class="icon icon-11 float-bob-x"></div>
        <div class="icon icon-12 float-bob-x"></div>
        <div class="icon icon-13 rotate-me"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 content-column">
            <div class="content-box">
              <h1>We Are Digital Service Provider</h1>
              <div class="text">
                Dolor sit amet consectetur elit sed do eiusmod tempor incididunt
                labore et dolore magna.
              </div>
              <div class="btn-box">
                <a href="#" class="btn-style-two">
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 image-column">
            <div class="image-box">
              <figure class="image float-bob-y clearfix">
                <img src="images/resource/banner-image-2.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
