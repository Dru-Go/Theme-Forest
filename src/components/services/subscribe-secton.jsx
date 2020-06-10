import React from "react";

export default function subscribeSecton() {
  return (
    <section class="subscribe-section subscribe-service-section">
      <div class="anim-icon">
        <div class="icon icon-1 float-bob-y"></div>
        <div class="icon icon-2 rotate-me"></div>
        <div class="icon icon-3 float-bob-x"></div>
        <div class="icon icon-4 rotate-me"></div>
        <div class="icon icon-5"></div>
        <div class="icon icon-6 float-bob-y"></div>
        <div class="icon icon-7 rotate-me"></div>
        <div class="icon icon-8"></div>
        <div class="icon icon-9 rotate-me"></div>
        <div class="icon icon-10 rotate-me"></div>
        <div class="icon icon-11"></div>
        <div class="icon icon-12 rotate-me"></div>
        <div class="icon icon-13 float-bob-y"></div>
        <div class="icon icon-14"></div>
        <div class="icon icon-15 rotate-me"></div>
      </div>
      <div class="container">
        <div class="sec-title centred">
          <h1>
            Check Your Website’s
            <br />
            SEO Score
          </h1>
        </div>
        <div class="inner-content">
          <form action="#" method="post" class="subscribe-form clearfix">
            <div class="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn-style-two">
                Check up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
