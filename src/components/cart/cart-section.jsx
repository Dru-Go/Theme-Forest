/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function cartSection() {
  return (
    <section class="cart-section cart-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 table-column">
            <div class="table-outer">
              <table class="cart-table">
                <thead class="cart-header">
                  <tr>
                    <th class="prod-column">Product Name</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th class="price">Price</th>
                    <th class="quantity">Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3" class="prod-column">
                      <div class="column-box">
                        <div class="prod-thumb">
                          <a href="#">
                            <img src="images/resource/shop/cart-1.jpg" alt="" />
                          </a>
                        </div>
                        <div class="prod-title">Flower print dress</div>
                      </div>
                    </td>
                    <td class="price">$80.00</td>
                    <td class="qty">
                      <input type="number" placeholder="Qty" />
                    </td>
                    <td class="sub-total">$80.00</td>
                    <td>
                      <div class="remove">
                        <a href="#">
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="prod-column">
                      <div class="column-box">
                        <div class="prod-thumb">
                          <a href="#">
                            <img src="images/resource/shop/cart-2.jpg" alt="" />
                          </a>
                        </div>
                        <div class="prod-title">Regular blouse shirt</div>
                      </div>
                    </td>
                    <td class="price">$60.25</td>
                    <td class="qty">
                      <input type="number" placeholder="Qty" />
                    </td>
                    <td class="sub-total">$60.25</td>
                    <td>
                      <div class="remove">
                        <a href="#">
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3" class="prod-column">
                      <div class="column-box">
                        <div class="prod-thumb">
                          <a href="#">
                            <img src="images/resource/shop/cart-3.jpg" alt="" />
                          </a>
                        </div>
                        <div class="prod-title">Sleeve bandage dress</div>
                      </div>
                    </td>
                    <td class="price">$70.00</td>
                    <td class="qty">
                      <input type="number" placeholder="Qty" />
                    </td>
                    <td class="sub-total">$70.00</td>
                    <td>
                      <div class="remove">
                        <a href="#">
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="coupon-box clearfix">
          <input type="text" placeholder="Coupon Code" />
          <button class="apply-btn" type="submit">
            Apply Now
          </button>
          <button class="btn-style-four update-btn" type="submit">
            Update Cart
          </button>
        </div>
        <div class="cart-total">
          <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-12 offset-xl-6 cart-column">
              <div class="total-cart-box clearfix">
                <h3>Cart Totals</h3>
                <div class="sub-total">
                  Sub Total <span>$240.00</span>
                </div>
                <div class="order-total">
                  Order Total <span>$240.00</span>
                </div>
                <div class="process-btn">
                  <a href="#" class="btn-style-two">
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
