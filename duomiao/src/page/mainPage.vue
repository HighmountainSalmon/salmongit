<template>
  <div class="home-4">
    <headerlayout></headerlayout>
    <!-- slider-group-start -->
    <div class="slider-group  mt-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <!-- slider-area-start -->
            <div class="slider-area">
              <div class="slider-active owl-carousel">
                <div class="single-slider slider-hm4-1 pt-154 pb-154 bg-img" style="background-image:url(img/slider/7.jpg);">
                  <div class="slider-content-4 slider-animated-1 pl-40">
                    <h1>Sale up to 30% off</h1>
                    <h2>Books in Store</h2>
                    <a href="#">Shopping now!</a>
                  </div>
                </div>
                <div class="single-slider pt-154 pb-154 bg-img" style="background-image:url(img/slider/8.jpg);">
                  <div class="slider-content-4 slider-animated-1 pl-40">
                    <h1>Sale up to 30% off</h1>
                    <h2>Books in Order</h2>
                    <a href="#">Shopping now!</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- slider-area-end -->
          </div>
          <div class="col-lg-3 col-md-3 hidden-sm col-xs-12">
            <!-- banner-static-2-start -->
            <div class="banner-static-2">
              <div class="banner-img-2">
                <a href="#"><img src="static/img/banner/20.jpg" alt="banner" /></a>
              </div>
              <!-- banner-area-3-start -->
              <div class="banner-area-3">
                <!-- single-banner-2-start -->
                <div class="single-banner-2 mt-16">
                  <div class="single-icon-2">
                    <a href="#">
                      <img class="service-blue-img" src="static/img/icon-img/service-1.png" alt="banner" />
                      <img class="service-white-img" src="static/img/icon-img/service-1-white.png" alt="banner" />
                    </a>
                  </div>
                  <div class="single-text-2">
                    <h2>Free shipping item</h2>
                    <p>For all orders over $500</p>
                  </div>
                </div>
                <!-- single-banner-2-end -->
                <!-- single-banner-2-start -->
                <div class="single-banner-2 mt-16">
                  <div class="single-icon-2">
                    <a href="#">
                      <img class="service-blue-img" src="static/img/icon-img/service-2.png" alt="banner" />
                      <img class="service-white-img" src="static/img/icon-img/service-2-white.png" alt="banner" />
                    </a>
                  </div>
                  <div class="single-text-2">
                    <h2>Money back guarante</h2>
                    <p>100% money back guarante</p>
                  </div>
                </div>
                <!-- single-banner-2-end -->
                <!-- single-banner-2-start -->
                <div class="single-banner-2 mt-16">
                  <div class="single-icon-2">
                    <a href="#">
                      <img class="service-blue-img" src="static/img/icon-img/service-3.png" alt="banner" />
                      <img class="service-white-img" src="static/img/icon-img/service-3-white.png" alt="banner" />
                    </a>
                  </div>
                  <div class="single-text-2">
                    <h2>Cash on delivery</h2>
                    <p>Lorem ipsum dolor amet</p>
                  </div>
                </div>
                <!-- single-banner-2-end -->
              </div>
              <!-- banner-area-3-end -->
            </div>
            <!-- banner-static-2-end -->
          </div>
        </div>
      </div>
    </div>
    <!-- slider-group-end -->
    <div class="home-main-area mt-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <book-category></book-category>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerlayout from '@/components/HeaderLayout'
import bookCategory from '@/components/bookCategory'
export default {
  name: 'mainPage',
  data () {
    return {
      user: ''
    }
  },
  components: {
    headerlayout,
    bookCategory
  }
}
</script>
