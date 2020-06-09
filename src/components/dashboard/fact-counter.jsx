import React from 'react'

export default function factCounter() {
    return (
      <section class="fact-counter centred">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
              <div
                class="counter-block-one wow slideInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div class="count-outer count-box">
                  <span
                    class="count-text"
                    data-speed="1500"
                    data-stop="235"
                  ></span>
                </div>
                <div class="text">Projects Done</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
              <div
                class="counter-block-one wow slideInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div class="count-outer count-box">
                  <span
                    class="count-text"
                    data-speed="1500"
                    data-stop="687"
                  ></span>
                </div>
                <div class="text">Satisfied Clients</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
              <div
                class="counter-block-one wow slideInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div class="count-outer count-box">
                  <span
                    class="count-text"
                    data-speed="1500"
                    data-stop="582"
                  ></span>
                </div>
                <div class="text">Cup of Coffe</div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
              <div
                class="counter-block-one wow slideInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div class="count-outer count-box">
                  <span
                    class="count-text"
                    data-speed="1500"
                    data-stop="129"
                  ></span>
                </div>
                <div class="text">Awards Win</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
