import React from "react";

export default function newsSection() {
  return (
    <section class="news-section">
      <div class="anim-icon">
        <div class="icon icon-1 float-bob-x"></div>
        <div class="icon icon-2 rotate-me"></div>
        <div class="icon icon-3 rotate-me"></div>
        <div class="icon icon-4"></div>
        <div class="icon icon-5"></div>
      </div>
      <div class="container">
        <div class="top-content clearfix">
          <div class="sec-title pull-left">
            <h4>Latest Article</h4>
            <h1>Stay Update with Rivox</h1>
          </div>
          <div class="btn-box pull-right">
            <a href="blog-grid.html" class="btn-style-two">
              View All Post
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              class="news-block-one wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box">
                <figure class="image-box">
                  <img src="images/resource/news-1.jpg" alt="" />
                  <div class="overlay-style"></div>
                  <div class="overlay">
                    <div class="box">
                      <div class="link-icon">
                        <a href="blog-single.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
                <div class="lower-content">
                  <div class="post-date">April 18, 2019</div>
                  <h3>
                    <a href="blog-single.html">
                      Designing for Appropriate Interaction
                    </a>
                  </h3>
                  <div class="text">
                    Lorem ipsum dolor amet consectetur adipisicing sed do
                    eiusmod tempor incididunt ut labore. magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              class="news-block-one wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box">
                <figure class="image-box">
                  <img src="images/resource/news-2.jpg" alt="" />
                  <div class="overlay-style"></div>
                  <div class="overlay">
                    <div class="box">
                      <div class="link-icon">
                        <a href="blog-single.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
                <div class="lower-content">
                  <div class="post-date">April 17, 2019</div>
                  <h3>
                    <a href="blog-single.html">
                      The Dark Side of Fitness Tracking
                    </a>
                  </h3>
                  <div class="text">
                    Lorem ipsum dolor amet consectetur adipisicing sed do
                    eiusmod tempor incididunt ut labore. magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 news-block">
            <div
              class="news-block-one wow fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div class="inner-box">
                <figure class="image-box">
                  <img src="images/resource/news-3.jpg" alt="" />
                  <div class="overlay-style"></div>
                  <div class="overlay">
                    <div class="box">
                      <div class="link-icon">
                        <a href="blog-single.html">
                          <i class="fa fa-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
                <div class="lower-content">
                  <div class="post-date">April 16, 2019</div>
                  <h3>
                    <a href="blog-single.html">
                      Post-Theranos, Startups Are Still Blood
                    </a>
                  </h3>
                  <div class="text">
                    Lorem ipsum dolor amet consectetur adipisicing sed do
                    eiusmod tempor incididunt ut labore. magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
