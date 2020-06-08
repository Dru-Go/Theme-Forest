import React from 'react';

function App() {
                                    
  
  
  // eslint-disable-next-line 
  return (
    <div className="App">


    {/* <!-- .preloader --> */}
    <div class="preloader"></div>
    {/* <!-- /.preloader --> */}


    {/* <!-- search-box-layout --> */}
    <div class="wraper_flyout_search">
        <div class="table">
            <div class="table-cell">
                <div class="flyout-search-layer"></div>
                <div class="flyout-search-layer"></div>
                <div class="flyout-search-layer"></div>
                <div class="flyout-search-close">
                    <span class="flyout-search-close-line"></span>
                    <span class="flyout-search-close-line"></span>
                </div>
                <div class="flyout_search">
                    <div class="flyout-search-title">
                        <h4>Search</h4>
                    </div>
                    <div class="flyout-search-bar">
                        <form role="search" method="get" action="#">
                            <div class="form-row">
                                <input type="search" placeholder="Type to search..." value="" name="s" required />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- search-box-layout end --> */}


    {/* <!-- Main Header --> */}
    <header class="main-header style-two">
        <div class="outer-container">
            <div class="main-box clearfix">
                <div class="logo-box">
                    <figure class="logo"><a href="index.html"><img src="images/logo-2.png" alt=""/></a></figure>
                </div>
                <div class="nav-outer clearfix">
                    <div class="menu-area">
                        <nav class="main-menu navbar-expand-lg">
                            <div class="navbar-header">
                                {/* <!-- Toggle Button -->       */}
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li class="current dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="index.html">Home Page 01</a></li>
                                            <li><a href="index-2.html">Home Page 02</a></li>
                                            <li><a href="index-3.html">Home Page 03</a></li>
                                            <li><a href="index-4.html">Home Page 04</a></li>
                                            <li><a href="index-5.html">Home Page 05</a></li>
                                            <li><a href="index-6.html">Home Page 06</a></li>
                                            <li class="dropdown"><a href="#">Header Styles</a>
                                                <ul>
                                                    <li><a href="index.html">Header Style 01</a></li>
                                                    <li><a href="index-2.html">Header Style 02</a></li>
                                                    <li><a href="index-3.html">Header Style 03</a></li>
                                                    <li><a href="index-4.html">Header Style 04</a></li>
                                                    <li><a href="index-5.html">Header Style 05</a></li>
                                                    <li><a href="index-6.html">Header Style 06</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> 
                                    <li class="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="service.html">Services Type 01</a></li>
                                            <li><a href="service-2.html">Services Type 02</a></li>
                                            <li><a href="service-3.html">Services Type 03</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="about.html">About Type 01</a></li>
                                            <li><a href="about-2.html">About Type 02</a></li>
                                            <li><a href="team.html">Team Type 01</a></li>
                                            <li><a href="team-2.html">Team Type 02</a></li>
                                            <li><a href="team-3.html">Team Type 03</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="shop.html">Shop Page</a></li>
                                            <li><a href="single-shop.html">Single Shop</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="error.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Portfolio</a>
                                        <ul>
                                            <li><a href="portfolio.html">Portfolio Type 01</a></li>
                                            <li><a href="portfolio-2.html">Portfolio Type 02</a></li>
                                            <li><a href="portfolio-3.html">Portfolio Type 03</a></li>
                                            <li><a href="portfolio-4.html">Portfolio Type 04</a></li>
                                            <li><a href="portfolio-single.html">Portfolio Single 01</a></li>
                                            <li><a href="portfolio-single-2.html">Portfolio Single 02</a></li>
                                            <li><a href="portfolio-single-3.html">Portfolio Single 03</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-classic.html">Blog Classic</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>                              
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="outer-box">
                        <div class="header-flyout-searchbar">
                            <i class="fa fa-search"></i>
                        </div>
                        <div class="btn-box"><a href="#" class="btn-style-one">Purchase Now</a></div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!--Sticky Header--> */}
        <div class="sticky-header">
            <div class="container clearfix">
                <figure class="logo-box"><a href="index.html"><img src="images/small-logo.png" alt=""/></a></figure>
                <div class="menu-area">
                    <nav class="main-menu navbar-expand-lg">
                        <div class="navbar-header">
                            {/* <!-- Toggle Button -->       */}
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <li class="current dropdown"><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home Page 01</a></li>
                                        <li><a href="index-2.html">Home Page 02</a></li>
                                        <li><a href="index-3.html">Home Page 03</a></li>
                                        <li><a href="index-4.html">Home Page 04</a></li>
                                        <li><a href="index-5.html">Home Page 05</a></li>
                                        <li><a href="index-6.html">Home Page 06</a></li>
                                        <li class="dropdown"><a href="#">Header Styles</a>
                                            <ul>
                                                <li><a href="index.html">Header Style 01</a></li>
                                                <li><a href="index-2.html">Header Style 02</a></li>
                                                <li><a href="index-3.html">Header Style 03</a></li>
                                                <li><a href="index-4.html">Header Style 04</a></li>
                                                <li><a href="index-5.html">Header Style 05</a></li>
                                                <li><a href="index-6.html">Header Style 06</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> 
                                <li class="dropdown"><a href="#">Services</a>
                                    <ul>
                                        <li><a href="service.html">Services Type 01</a></li>
                                        <li><a href="service-2.html">Services Type 02</a></li>
                                        <li><a href="service-3.html">Services Type 03</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="about.html">About Type 01</a></li>
                                        <li><a href="about-2.html">About Type 02</a></li>
                                        <li><a href="team.html">Team Type 01</a></li>
                                        <li><a href="team-2.html">Team Type 02</a></li>
                                        <li><a href="team-3.html">Team Type 03</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li><a href="shop.html">Shop Page</a></li>
                                        <li><a href="single-shop.html">Single Shop</a></li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="error.html">404 Page</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">Portfolio</a>
                                    <ul>
                                        <li><a href="portfolio.html">Portfolio Type 01</a></li>
                                        <li><a href="portfolio-2.html">Portfolio Type 02</a></li>
                                        <li><a href="portfolio-3.html">Portfolio Type 03</a></li>
                                        <li><a href="portfolio-4.html">Portfolio Type 04</a></li>
                                        <li><a href="portfolio-single.html">Portfolio Single 01</a></li>
                                        <li><a href="portfolio-single-2.html">Portfolio Single 02</a></li>
                                        <li><a href="portfolio-single-3.html">Portfolio Single 03</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-classic.html">Blog Classic</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>                              
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
        {/* <!-- sticky-header end --> */}
    </header>
    {/* <!-- End Main Header --> */}


    {/* <!-- banner-section --> */}
    <section class="banner-section style-two">
        <div class="anim-icon">
            <div class="icon icon-2"></div>
            <div class="icon icon-5"></div>
            <div class="icon icon-6"></div>
            <div class="icon icon-7"></div>
            <div class="icon icon-8 rotate-me"></div>
            <div class="icon icon-9 rotate-me"></div>
            <div class="icon icon-10"></div>
            <div class="icon icon-11 float-bob-x"></div>
            <div class="icon icon-12 float-bob-x"></div>
            <div class="icon icon-13 rotate-me"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div class="content-box">
                        <h1>We Are Digital Service Provider</h1>
                        <div class="text">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.</div>
                        <div class="btn-box"><a href="#" class="btn-style-two">Purchase Now</a></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div class="image-box">
                        <figure class="image float-bob-y clearfix"><img src="images/resource/banner-image-2.png" alt=""/></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- banner-section end --> */}


    {/* <!-- clients-section --> */}
    <section class="clients-section">
        <div class="container">
            <div class="clients-outer">
                <ul class="clients-carousel owl-carousel">
                    <li class="slide-item">
                        <figure class="image-box"><a href="#"><img src="images/clients/clients-logo-1.png" alt=""/></a></figure>
                    </li>
                    <li class="slide-item">
                        <figure class="image-box"><a href="#"><img src="images/clients/clients-logo-2.png" alt=""/></a></figure>
                    </li>
                    <li class="slide-item">
                        <figure class="image-box"><a href="#"><img src="images/clients/clients-logo-3.png" alt=""/></a></figure>
                    </li>
                    <li class="slide-item">
                        <figure class="image-box"><a href="#"><img src="images/clients/clients-logo-4.png" alt=""/></a></figure>
                    </li>
                    <li class="slide-item">
                        <figure class="image-box"><a href="#"><img src="images/clients/clients-logo-5.png" alt=""/></a></figure>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    {/* <!-- clients-section end --> */}


    {/* <!-- about-section --> */}
    <section class="about-section style-two">
        <div class="anim-icon">
            <div class="icon icon-1 float-bob-y"></div>
            <div class="icon icon-2 rotate-me"></div>
            <div class="icon icon-3 rotate-me"></div>
            <div class="icon icon-4 float-bob-y"></div>
            <div class="icon icon-5"></div>
            <div class="icon icon-6"></div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 video-column">
                    <div class="video-content clearfix" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                        <figure class="image"><img src="images/resource/about-2.jpg" alt=""/></figure>
                        <div class="video-icon wow zoomIn" data-wow-delay="2000ms" data-wow-duration="1500ms">
                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="overlay-link lightbox-image" data-caption=""><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12 content-column">
                    <div class="content-box">
                        <div class="sec-title">
                            <h4>About Rivox</h4>
                            <h1>Rivox tells you a lot about your website.</h1>
                        </div>
                        <div class="text">Dolor sit amet consectetur elit sed do eiusmod tempor incid idunt labore  dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco.</div>
                        <ul class="list">
                            <li>Various Analysis Options</li>
                            <li>Page Load Details (time, size, number of requests)</li>
                            <li>Waterfall, Video and Report History</li>
                        </ul>
                        <div class="btn-box"><a href="#" class="btn-style-two">Purchase Now</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- about-section end --> */}


    {/* <!-- feature-section --> */}
    <section class="feature-section style-two centred">
        <div class="anim-icon">
            <div class="icon icon-1 rotate-me"></div>
            <div class="icon icon-2 rotate-me"></div>
            <div class="icon icon-3 rotate-me"></div>
            <div class="icon icon-4 float-bob-y"></div>
            <div class="icon icon-5 float-bob-x"></div>
        </div>
        <div class="container">
            <div class="sec-title">
                <h4>Services</h4>
                <h1>The Best Business Solutions<br />Guide for You</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                    <div class="feature-block-one">
                        <div class="inner-box">
                            <figure class="icon-box"><img src="images/icons/icon-1.png" alt=""/></figure>
                            <h2><a href="#">Online<br />Merketing</a></h2>
                            <div class="text">Lorem ipsum dolor amet consectetur adipisicing  sed do eiusmod tempor incididunt ut labore.</div>
                            <div class="btn-box"><a href="#" class="btn-style-three">Purchase Now</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                    <div class="feature-block-one">
                        <div class="inner-box">
                            <figure class="icon-box"><img src="images/icons/icon-2.png" alt=""/></figure>
                            <h2><a href="#">Real-time data analytics</a></h2>
                            <div class="text">Lorem ipsum dolor amet consectetur adipisicing  sed do eiusmod tempor incididunt ut labore.</div>
                            <div class="btn-box"><a href="#" class="btn-style-three">Purchase Now</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                    <div class="feature-block-one">
                        <div class="inner-box">
                            <figure class="icon-box"><img src="images/icons/icon-3.png" alt=""/></figure>
                            <h2><a href="#">Speed<br />Optimization</a></h2>
                            <div class="text">Lorem ipsum dolor amet consectetur adipisicing  sed do eiusmod tempor incididunt ut labore.</div>
                            <div class="btn-box"><a href="#" class="btn-style-three">Purchase Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- feature-section end --> */}


    {/* <!-- portfolio-section --> */}
    <section class="portfolio-section">
        <div class="anim-icon">
            <div class="icon icon-1"></div>
            <div class="icon icon-2"></div>
            <div class="icon icon-3"></div>
            <div class="icon icon-4 float-bob-y"></div>
        </div>
        <div class="container">
            <div class="project-tab">
                <div class="top-content clearfix">
                    <div class="sec-title pull-left">
                        <h4>Portfolio</h4>
                        <h1>Latest Projects</h1>
                    </div>
                    <div class="tab-btn-box pull-right">
                        <ul class="product-tab-btns project-btn tab-btns clearfix post-filter">
                            <li class="p-tab-btn active-btn" data-tab="#p-tab-1">All</li>
                            <li class="p-tab-btn" data-tab="#p-tab-2">Design</li>
                            <li class="p-tab-btn" data-tab="#p-tab-3">Web Development</li>
                            <li class="p-tab-btn" data-tab="#p-tab-4">Illustration</li>
                            <li class="p-tab-btn" data-tab="#p-tab-5">Photograpy</li>
                        </ul>
                    </div>
                </div>
                <div class="tabs-content-inner">
                    <div class="p-tabs-content">
                        <div class="p-tab active-tab" id="p-tab-1">
                            <div class="project-carousel owl-carousel owl-theme">
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-1.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-2.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-3.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-1.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-2.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-3.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-1.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-2.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-3.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-tab" id="p-tab-2">
                            <div class="project-carousel owl-carousel owl-theme">
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-4.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-5.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-6.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-4.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-5.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-6.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-4.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-5.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-6.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="p-tab" id="p-tab-3">
                            <div class="project-carousel owl-carousel owl-theme">
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-7.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-7.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-8.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-8.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-9.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-9.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-7.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-7.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-8.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-8.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-9.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-9.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-7.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-7.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-8.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-8.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-9.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-9.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="p-tab" id="p-tab-4">
                            <div class="project-carousel owl-carousel owl-theme">
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-1.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-2.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-3.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-1.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-2.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-3.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-1.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-1.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-2.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-2.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-3.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-3.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div class="p-tab" id="p-tab-5">
                            <div class="project-carousel owl-carousel owl-theme">
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-4.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-5.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-6.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-4.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-5.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-6.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-4.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-4.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Virtual Integration</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-5.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-5.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Partner influencers</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio-block-one">
                                    <div class="inner-box">
                                        <figure class="image-box"><a href="images/portfolio/portfolio-6.jpg" class="lightbox-image" data-fancybox="gallery"><img src="images/portfolio/portfolio-6.jpg" alt=""/></a></figure>
                                        <div class="lower-content">
                                            <h3><a href="portfolio-single.html">Business development</a></h3>
                                            <span>Illustration</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>           
                </div>
            </div>
        </div>
    </section>
    {/* <!-- portfolio-section end --> */}


    {/* <!-- testimonial-style-two --> */}
    <section class="testimonial-style-two">
        <div class="anim-icon">
            <div class="icon icon-1 rotate-me"></div>
            <div class="icon icon-2 rotate-me"></div>
            <div class="icon icon-3"></div>
        </div>
        <div class="container">
            <div class="testimonial-carousel owl-carousel owl-theme nav-style-one owl-dots-none">
                <div class="inner-box">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div class="image-box clearfix">
                                <figure class="image"><img src="images/resource/testimonial-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div class="content-box">
                                <div class="sec-title">
                                    <h4>Testimonials</h4>
                                    <h1>Clients Feedback</h1>
                                </div>
                                <div class="text">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi</div>
                                <div class="author-info">
                                    <h4 class="name">Hattie Bradly</h4>
                                    <span class="designation">Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner-box">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div class="image-box clearfix">
                                <figure class="image"><img src="images/resource/testimonial-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div class="content-box">
                                <div class="sec-title">
                                    <h4>Testimonials</h4>
                                    <h1>Clients Feedback</h1>
                                </div>
                                <div class="text">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi</div>
                                <div class="author-info">
                                    <h4 class="name">Hattie Bradly</h4>
                                    <span class="designation">Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner-box">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div class="image-box clearfix">
                                <figure class="image"><img src="images/resource/testimonial-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div class="content-box">
                                <div class="sec-title">
                                    <h4>Testimonials</h4>
                                    <h1>Clients Feedback</h1>
                                </div>
                                <div class="text">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi</div>
                                <div class="author-info">
                                    <h4 class="name">Hattie Bradly</h4>
                                    <span class="designation">Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- testimonial-style-two end --> */}


    {/* <!-- pricing-style-two --> */}
    <section class="pricing-style-two centred">
        <div class="anim-icon">
            <div class="icon icon-1 rotate-me"></div>
            <div class="icon icon-2 rotate-me"></div>
            <div class="icon icon-3 float-bob-y"></div>
        </div>
        <div class="container">
            <div class="sec-title">
                <h4>Pricing Table</h4>
                <h1>No hidden charge choose<br />your pricing plan</h1>
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
    {/* <!-- pricing-style-two end --> */}


    {/* <!-- fact-counter --> */}
    <section class="fact-counter centred">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                    <div class="counter-block-one wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div class="count-outer count-box">
                            <span class="count-text" data-speed="1500" data-stop="235"></span>
                        </div>
                        <div class="text">Projects Done</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                    <div class="counter-block-one wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div class="count-outer count-box">
                            <span class="count-text" data-speed="1500" data-stop="687"></span>
                        </div>
                        <div class="text">Satisfied Clients</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                    <div class="counter-block-one wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div class="count-outer count-box">
                            <span class="count-text" data-speed="1500" data-stop="582"></span>
                        </div>
                        <div class="text">Cup of Coffe</div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 counter-block">
                    <div class="counter-block-one wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div class="count-outer count-box">
                            <span class="count-text" data-speed="1500" data-stop="129"></span>
                        </div>
                        <div class="text">Awards Win</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- fact-counter end --> */}


    {/* <!-- news-section --> */}
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
                    <a href="blog-grid.html" class="btn-style-two">View All Post</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="images/resource/news-1.jpg" alt=""/>
                                <div class="overlay-style"></div>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link-icon">
                                            <a href="blog-single.html"><i class="fa fa-link"></i></a>    
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="lower-content">
                                <div class="post-date">April 18, 2019</div>
                                <h3><a href="blog-single.html">Designing for Appropriate Interaction</a></h3>
                                <div class="text">Lorem ipsum dolor amet consectetur adipisicing  sed do eiusmod tempor incididunt ut labore. magna aliqua.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="images/resource/news-2.jpg" alt=""/>
                                <div class="overlay-style"></div>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link-icon">
                                            <a href="blog-single.html"><i class="fa fa-link"></i></a>    
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="lower-content">
                                <div class="post-date">April 17, 2019</div>
                                <h3><a href="blog-single.html">The Dark Side of Fitness Tracking</a></h3>
                                <div class="text">Lorem ipsum dolor amet consectetur adipisicing  sed do eiusmod tempor incididunt ut labore. magna aliqua.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div class="news-block-one wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div class="inner-box">
                            <figure class="image-box">
                                <img src="images/resource/news-3.jpg" alt=""/>
                                <div class="overlay-style"></div>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link-icon">
                                            <a href="blog-single.html"><i class="fa fa-link"></i></a>    
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div class="lower-content">
                                <div class="post-date">April 16, 2019</div>
                                <h3><a href="blog-single.html">Post-Theranos, Startups Are Still Blood</a></h3>
                                <div class="text">Lorem ipsum dolor amet consectetur adipisicing  sed do eiusmod tempor incididunt ut labore. magna aliqua.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- news-section --> */}


    {/* <!-- subscribe-style-two --> */}
    <section class="subscribe-style-two">
        <div class="anim-icon">
            <div class="icon icon-1 rotate-me"></div>
            <div class="icon icon-2 rotate-me"></div>
            <div class="icon icon-3 rotate-me"></div>
            <div class="icon icon-4"></div>
            <div class="icon icon-5 float-bob-y"></div>
            <div class="icon icon-6"></div>
            <div class="icon icon-7 rotate-me"></div>
            <div class="icon icon-8 float-bob-x"></div>
        </div>
        <div class="container">
            <div class="sec-title centred">
                <h1>Lets Create Something<br />Awesome</h1>
            </div>
            <div class="inner-content">
                <form action="#" method="post" class="subscribe-form">
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn-style-two">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    {/* <!-- subscribe-style-two end --> */}


    {/* <!-- main-footer --> */}
    <footer class="main-footer">
        <div class="container">
            <div class="widget-content">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget logo-widget">
                            <figure class="footer-logo"><a href="index.html"><img src="images/footer-logo.png" alt=""/></a></figure>
                            <div class="text">Lorem ipsum dolor amet consectetur adip- ielit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</div>
                            <div class="phone"><i class="fa fa-phone"></i><a href="tel:(251)235-3256">(251) 235-3256</a></div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget link-widget">
                            <h3 class="widget-title">Quick Link</h3>
                            <ul class="link-list">
                                <li><a href="#">Company History</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget link-widget service-widget">
                            <h3 class="widget-title">Services</h3>
                            <ul class="link-list">
                                <li><a href="#">Company History</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div class="footer-widget contact-widget">
                            <h3 class="widget-title">Contact Info</h3>
                            <ul class="info-box">
                                <li>Flat 20, Reynolds Neck, North Hele naville, FV77 8WS</li>
                                <li><a href="tel:+2(305)587-3407">+2(305) 587-3407</a></li>
                                <li><a href="mailto:info@example.com">info@example.com</a></li>
                            </ul>
                            <ul class="footer-social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom clearfix">
                <div class="left-content pull-left">
                    <div class="copyright"><a href="#">Rivox</a> &copy; 2019 All Right Reserved</div>
                </div>
                <div class="right-content pull-right">
                    <ul class="footer-nav">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- main-footer end --> */}



{/* <!--Scroll to top--> */}
<button class="scroll-top scroll-to-target" data-target="html">
    <span class="fa fa-arrow-up"></span>
    <span class="text">Top</span>
</button>

    </div>
  );
}

export default App;
