import React from "react";

export default function subscribeStyle() {
  return (
    <section class="subscribe-style-two">
      <div class="anim-icon">
        <div class="icon icon-1 rotate-me"></div>
        <div class="icon icon-2 rotate-me"></div>
        <div class="icon icon-3 rotate-me"></div>
        <div class="icon icon-4"></div>
        <div class="icon icon-5 float-bob-y"></div>
        <div class="icon icon-6"></div>
        <div class="icon icon-7 rotate-me"></div>
        <div class="icon icon-8 float-bob-x"></div>
      </div>
      <div class="container">
        <div class="sec-title centred">
          <h1>
            Lets Create Something
            <br />
            Awesome
          </h1>
        </div>
        <div class="inner-content">
          <form action="#" method="post" class="subscribe-form">
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
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
