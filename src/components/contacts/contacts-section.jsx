/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function contactsSection() {
  return (
    <section class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-12 col-sm-12 info-column">
            <div class="info-box">
              <h2>Get In Touch</h2>
              <div class="text">
                Mollit anim id est laborum perspiciatis unde omnis iste natus
                error sit voluptatem accusantium dolore.
              </div>
              <ul class="info-list">
                <li>
                  <h5>Address:</h5>
                  77408 Satterfield Motorway Suite 469 New Antonetta, BC K3L6P6
                </li>
                <li>
                  <h5>Email:</h5>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                  <br />
                  <a href="mailto:support@example.com">support@example.com</a>
                </li>
                <li>
                  <h5>Phone:</h5>
                  <a href="tel:+0813256659487">(+081) 325 665 9487</a>
                  <br />
                  <a href="tel:+0813256659489">(+081) 325 665 9489</a>
                </li>
                <li class="social-share">
                  <h5>Share:</h5>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-vimeo-v"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12 form-column">
            <div class="contact-form-area">
              <h2>Drop us a Line</h2>
              <form
                method="post"
                action="sendemail.php"
                id="contact-form"
                class="default-form"
              >
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      name="message"
                      placeholder="Write here message"
                    ></textarea>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                    <button
                      type="submit"
                      class="btn-style-two"
                      name="submit-form"
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
