import React from "react";

export default function notFoundError() {
  return (
    <div>

      {/* <!-- error-section --> */}
      <section class="error-section">
        <div class="container">
          <div class="content-box centred">
            <figure class="error-image">
              <img src="images/resource/error.png" alt="" />
            </figure>
            <div class="sec-title">
              <h1>
                Oops, this page could
                <br />
                not be found!
              </h1>
            </div>
            <div class="btn-box">
              <a href="index.html" class="btn-style-two">
                Back Home
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- error-section end --> */}
    </div>
  );
}
