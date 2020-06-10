/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function singlesSection() {
  return (
    <section class="single-shop">
      <div class="container">
        <div class="products-details">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure class="image-box">
                <a
                  href="images/resource/shop/shop-details.jpg"
                  class="lightbox-image"
                >
                  <img src="images/resource/shop/shop-details.jpg" alt="" />
                </a>
              </figure>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content-box">
                <ul class="rating">
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                </ul>
                <div class="reviews">
                  <a href="#">5 Reviews</a>
                </div>
                <h2>Flower Print Dress</h2>
                <div class="item-price">$80.00</div>
                <div class="text">
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. sed
                    ut perspic atis unde omnis iste natus error sit voluptatem
                    accusan enim ipsam voluptatem quia voluptas sit aspern odit
                    aut fugit.
                  </p>
                </div>
                <div class="size-box">
                  <h5>Select by size</h5>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="customRadio"
                      checked
                      id="customRadio1"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio1">
                      L
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="customRadio"
                      checked
                      id="customRadio2"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio2">
                      XL
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="customRadio"
                      checked
                      id="customRadio3"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio3">
                      M
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="customRadio"
                      checked
                      id="customRadio4"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio4">
                      S
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      name="customRadio"
                      checked
                      id="customRadio5"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio5">
                      XS
                    </label>
                  </div>
                </div>
                <div class="addto-cart-box clearfix">
                  <div class="cart-btn">
                    <button type="button" class="btn-style-two">
                      <i class="fas fa-shopping-bag"></i>Add to cart
                    </button>
                  </div>
                  <div class="item-quantity">
                    <input
                      class="quantity-spinner"
                      type="text"
                      value="1"
                      name="quantity"
                    />
                  </div>
                  <div class="like-btn">
                    <a href="#">
                      <i class="far fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="share-option">
                  <h5>Follow Us:</h5>
                  <ul class="social-list">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-info-tabs">
          <div class="product-tab tabs-box">
            <ul class="tab-btns tab-buttons clearfix">
              <li class="tab-btn active-btn" data-tab="#tab-1">
                Description
              </li>
              <li class="tab-btn" data-tab="#tab-2">
                Additional info
              </li>
              <li class="tab-btn" data-tab="#tab-3">
                Reviews (0)
              </li>
            </ul>
            <div class="tabs-content">
              <div class="tab active-tab clearfix" id="tab-1">
                <div class="text">
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. neque porro quisquam est
                    qui dolorem ipsum quia dolor sit amet consectetur adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </div>
              <div class="tab clearfix" id="tab-2">
                <div class="text">
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. neque porro quisquam est
                    qui dolorem ipsum quia dolor sit amet consectetur adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </div>
              <div class="tab clearfix" id="tab-3">
                <div class="text">
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. neque porro quisquam est
                    qui dolorem ipsum quia dolor sit amet consectetur adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="related-products">
          <div class="sec-title">
            <h1>Related Products</h1>
          </div>
          <div class="three-column-carousel owl-carousel owl-theme nav-style-one owl-dots-none">
            <div class="single-shop-block">
              <div class="image-holder">
                <figure class="image-box">
                  <img src="images/resource/shop/shop-4.jpg" alt="" />
                </figure>
                <ul class="list">
                  <li>
                    <a href="#">
                      <i class="far fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="single-shop.html">
                      <i class="fas fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="images/resource/shop/shop-4.jpg"
                      class="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="single-shop.html">Retro Sport Shoe</a>
                </h3>
                <div class="price">$90.00</div>
              </div>
            </div>
            <div class="single-shop-block">
              <div class="image-holder">
                <figure class="image-box">
                  <img src="images/resource/shop/shop-5.jpg" alt="" />
                </figure>
                <ul class="list">
                  <li>
                    <a href="#">
                      <i class="far fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="single-shop.html">
                      <i class="fas fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="images/resource/shop/shop-5.jpg"
                      class="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="single-shop.html">Flower print dress</a>
                </h3>
                <div class="price">$80.00</div>
              </div>
            </div>
            <div class="single-shop-block">
              <div class="image-holder">
                <figure class="image-box">
                  <img src="images/resource/shop/shop-6.jpg" alt="" />
                </figure>
                <ul class="list">
                  <li>
                    <a href="#">
                      <i class="far fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="single-shop.html">
                      <i class="fas fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="images/resource/shop/shop-6.jpg"
                      class="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="single-shop.html">Sleeve bandage dress</a>
                </h3>
                <div class="price">$70.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
