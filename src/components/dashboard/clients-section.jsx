import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function clientsSection() {
    return (
      <section class="clients-section">
        <div class="container">
          <div class="clients-outer">
            <ul class="clients-carousel owl-carousel">
              <li class="slide-item">
                <figure class="image-box">
                  <a href="#">
                    <img src="images/clients/clients-logo-1.png" alt="" />
                  </a>
                </figure>
              </li>
              <li class="slide-item">
                <figure class="image-box">
                  <a href="#">
                    <img src="images/clients/clients-logo-2.png" alt="" />
                  </a>
                </figure>
              </li>
              <li class="slide-item">
                <figure class="image-box">
                  <a href="#">
                    <img src="images/clients/clients-logo-3.png" alt="" />
                  </a>
                </figure>
              </li>
              <li class="slide-item">
                <figure class="image-box">
                  <a href="#">
                    <img src="images/clients/clients-logo-4.png" alt="" />
                  </a>
                </figure>
              </li>
              <li class="slide-item">
                <figure class="image-box">
                  <a href="#">
                    <img src="images/clients/clients-logo-5.png" alt="" />
                  </a>
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}
