import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function pricingStyle() {
    return (
      <section class="pricing-style-two centred">
        <div class="anim-icon">
          <div class="icon icon-1 rotate-me"></div>
          <div class="icon icon-2 rotate-me"></div>
          <div class="icon icon-3 float-bob-y"></div>
        </div>
        <div class="container">
          <div class="sec-title">
            <h4>Pricing Table</h4>
            <h1>
              No hidden charge choose
              <br />
              your pricing plan
            </h1>
          </div>
          <div class="inner-content">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12 pricing-block">
                <div class="pricing-table">
                  <div class="table-header">
                    <h1 class="price">$15</h1>
                    <a href="#">Select Plan</a>
                    <h4>Daily Plan</h4>
                  </div>
                  <div class="table-content">
                    <ul>
                      <li>Unlimited campaigns</li>
                      <li>Basic donor data</li>
                      <li>Team fundraising</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 pricing-block">
                <div class="pricing-table">
                  <div class="table-header">
                    <h1 class="price">$30</h1>
                    <a href="#">Select Plan</a>
                    <h4>Monthly Plan</h4>
                  </div>
                  <div class="table-content">
                    <ul>
                      <li>Unlimited campaigns</li>
                      <li>Basic donor data</li>
                      <li>Team fundraising</li>
                      <li>Customizable emails</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 pricing-block">
                <div class="pricing-table">
                  <div class="table-header">
                    <h1 class="price">$40</h1>
                    <a href="#">Select Plan</a>
                    <h4>Yearly Plan</h4>
                  </div>
                  <div class="table-content">
                    <ul>
                      <li>Unlimited campaigns</li>
                      <li>Basic donor data</li>
                      <li>Team fundraising</li>
                      <li>Customizable emails</li>
                      <li>Complex programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
