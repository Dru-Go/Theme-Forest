import React from 'react'
import {Link} from 'react-router-dom'
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function mainHeader() {
    return (
      <div>
        <div class="outer-container">
          <div class="main-box clearfix">
            <div class="logo-box">
              <figure class="logo">
                <a href="index.html">
                  <img
                    src="images/Logo.png"
                    width="150"
                    height="50"
                    class="logo"
                    alt=""
                  />
                </a>
              </figure>
            </div>
            <div class="nav-outer clearfix">
              <div class="menu-area">
                <nav class="main-menu navbar-expand-lg">
                  <div class="navbar-header">
                    {/* <!-- Toggle Button -->       */}
                    <button
                      type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div class="navbar-collapse collapse clearfix">
                    <ul class="navigation clearfix">
                      <li class="">
                        <a href="#" class="hover-link">
                          Home
                        </a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Services</a>
                      </li>
                      <li class="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/teams">Team</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq Page</Link>
                          </li>
                          <li>
                            <Link to="/shop">Shop Page</Link>
                          </li>
                          <li>
                            <Link to="/single">Single Shop</Link>
                          </li>
                          <li>
                            <Link to="/cart">Cart Page</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">Portfolio</a>
                        <ul>
                          <li>
                            <a href="portfolio.html">Portfolio Type 01</a>
                          </li>
                          <li>
                            <a href="portfolio-2.html">Portfolio Type 02</a>
                          </li>
                          <li>
                            <a href="portfolio-3.html">Portfolio Type 03</a>
                          </li>
                          <li>
                            <a href="portfolio-4.html">Portfolio Type 04</a>
                          </li>
                          <li>
                            <a href="portfolio-single.html">
                              Portfolio Single 01
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-single-2.html">
                              Portfolio Single 02
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-single-3.html">
                              Portfolio Single 03
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <li>
                            <Link to="/blogGrid">Blog Grid</Link>
                          </li>
                          <li>
                            <Link to="/blogClassic">Blog Classic</Link>
                          </li>
                          <li>
                            <Link to="/blogSingle">Blog Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
