/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function checkoutSection() {
    return (
         <section class="checkout-section">
        <div class="container">
            <div class="top-content">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 column">
                        <div class="customer">Returning Customer? <a href="#">Click here to Login</a></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 column">
                        <div class="coupon">Have a Coupon? <a href="#">Click here to enter your code</a></div>
                    </div>
                </div>
            </div>
            <div class="order-information">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 billing-column">
                        <div class="billing-info">
                            <h3>Billing Details</h3>
                            <form action="#" method="post" class="billing-form default-form">
                                <div class="row">
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label>First Name*</label>
                                        <div class="field-input">
                                            <input type="text" name="first-name"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label>Last Name*</label>
                                        <div class="field-input">
                                            <input type="text" name="last-name"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                        <label>Company Name*</label>
                                        <div class="field-input">
                                            <input type="text" name="company"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                        <label>Email Address*</label>
                                        <div class="field-input">
                                            <input type="email" name="email"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label>Phone Number*</label>
                                        <div class="field-input">
                                            <input type="tel" name="phone"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label>Country*</label>
                                        <div class="select-column select-box">
                                            <select class="selectmenu">
                                                <option selected="selected">United State</option>
                                                <option>United Kingdom</option>
                                                <option>France</option>
                                                <option>Maxico</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                        <label>Address*</label>
                                        <div class="field-input">
                                            <input type="text" class="address" name="address"/>
                                            <input type="text" name="address"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                        <label>Town/City*</label>
                                        <div class="field-input">
                                            <input type="text" name="town-city"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label>State*</label>
                                        <div class="select-column select-box">
                                            <select class="selectmenu">
                                                <option selected="selected">Select Option</option>
                                                <option>United State</option>
                                                <option>United Kingdom</option>
                                                <option>Maxico</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label>Zip Code*</label>
                                        <div class="field-input">
                                            <input type="text" name="zip"/>
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                        <div class="create-acc">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="ship-same-address"/>
                                                    <span>Create an Account</span>
                                                </label>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="order-note">
                            <div class="note-book">
                                <label>Order Notes</label>
                                <textarea placeholder="Notes about your order, e.g. special notes for your delivery"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 order-column">
                        <div class="order-info">
                            <h3>Your Order</h3>
                            <div class="order-box">
                                <div class="order-product">
                                    <div class="single-item">
                                        <figure class="image-box"><a href="#"><img src="images/resource/shop/cart-1.jpg" alt=""/></a></figure>
                                        <div class="text">Flower print dress</div>
                                        <span>$80.00</span>
                                    </div>
                                    <div class="single-item">
                                        <figure class="image-box"><a href="#"><img src="images/resource/shop/cart-2.jpg" alt=""/></a></figure>
                                        <div class="text">Regular blouse shirt</div>
                                        <span>$70.00</span>
                                    </div>
                                    <div class="single-item">
                                        <figure class="image-box"><a href="#"><img src="images/resource/shop/cart-3.jpg" alt=""/></a></figure>
                                        <div class="text">Sleeve bandage dress</div>
                                        <span>$60.00</span>
                                    </div>
                                </div>
                                <div class="sub-total clearfix">Sub Total <span>$240.00</span></div>
                                <div class="order-total clearfix">Order Total <span>$240.00</span></div>
                                <div class="payment-info">
                                    <div class="payment-option">
                                        <div class="option-block">
                                            <div class="checkbox">
                                                <label>
                                                    <input name="pay-us" type="checkbox" checked="checked"/>
                                                    <span>Direct Bank Transfer</span>
                                                </label>
                                            </div>
                                            <div class="text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
                                        </div>
                                        <div class="option-block">
                                            <div class="radio-block">
                                                <div class="checkbox">
                                                    <label>
                                                        <input name="pay-us" type="checkbox"/>
                                                        <span>Paypal <a href="#">What is paypal?</a></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="option-block">
                                            <div class="radio-block">
                                                <div class="checkbox">
                                                    <label>
                                                        <input name="pay-us" type="checkbox"/>
                                                        <span>Paypal</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lower-text">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div class="btn-box"><a href="#" class="btn-style-two">Place Your Order</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
