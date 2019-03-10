<template>
  <div>
    <headerlayout></headerlayout>
    <div class="breadcrumbs-area mb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumbs-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#" class="active">book-details</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumbs-area-end -->
    <!-- product-main-area-start -->
    <div class="product-main-area mb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
            <!-- product-main-area-start -->
            <div class="product-main-area">
              <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                </div>
                <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                  <div class="product-info-main">
                    <div class="page-title">
                      <h1>
                        {{this.bookInfo.bookName}}
                      </h1>
                    </div>
                    <div class="product-info-stock-sku">
                      <span>In stock</span>
                      <div class="product-attribute">
                        <span>SKU</span>
                        <span class="value">24-WB05</span>
                      </div>
                    </div>
                    <div class="product-reviews-summary">
                      <div class="rating-summary">
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-star"></i>
                        </a>
                      </div>
                      <div class="reviews-actions">
                        <a href="#">3 Reviews</a>
                        <a href="#" class="view">Add Your Review</a>
                      </div>
                    </div>
                    <div class="product-info-price">
                      <div class="price-final">
                        <span>$34.00</span>
                        <span class="old-price">$40.00</span>
                      </div>
                    </div>
                    <div class="product-add-form">
                      <form action="#">
                        <div class="quality-button">
                          <input class="qty" type="number" value="1">
                        </div>
                        <a href="#">Add to cart</a>
                      </form>
                    </div>
                    <div class="product-social-links">
                      <div class="product-addto-links-text">
                        <p>Powerwalking to the gym or strolling to the local coffeehouse, the Savvy Shoulder Tote lets you stash your essentials in sporty style! A top-loading compartment provides quick and easy access to larger items, while zippered pockets on the front and side hold cash, credit cards and phone.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product-main-area-end -->
            <!-- product-info-area-start -->
            <div class="product-info-area mt-80">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li class="active">
                  <a href="#Details" data-toggle="tab">Details</a>
                </li>
                <li>
                  <a href="#Reviews" data-toggle="tab">Reviews 3</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="Details">
                  <div class="valu">
                    <p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it's ideal for athletes with places to go.</p>
                    <ul>
                      <li>
                        <i class="fa fa-circle"></i>Dual top handles.</li>
                      <li>
                        <i class="fa fa-circle"></i>Adjustable shoulder strap.</li>
                      <li>
                        <i class="fa fa-circle"></i>Full-length zipper.</li>
                      <li>
                        <i class="fa fa-circle"></i>L 29" x W 13" x H 11".</li>
                    </ul>
                  </div>
                </div>
                <div class="tab-pane" id="Reviews">
                  <div class="valu valu-2">
                    <div class="section-title mb-60 mt-60">
                      <h2>Customer Reviews</h2>
                    </div>
                    <ul>
                      <li>
                        <div class="review-title">
                          <h3>themes</h3>
                        </div>
                        <div class="review-left">
                          <div class="review-rating">
                            <span>Price</span>
                            <div class="rating-result">
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </div>
                          </div>
                          <div class="review-rating">
                            <span>Value</span>
                            <div class="rating-result">
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </div>
                          </div>
                          <div class="review-rating">
                            <span>Quality</span>
                            <div class="rating-result">
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                              <a href="#">
                                <i class="fa fa-star"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="review-right">
                          <div class="review-content">
                            <h4>themes </h4>
                          </div>
                          <div class="review-details">
                            <p class="review-author">Review by
                              <a href="#">plaza</a>
                            </p>
                            <p class="review-date">Posted on
                              <span>12/9/16</span>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="review-add">
                      <h3>You're reviewing:</h3>
                      <h4>Joust Duffle Bag</h4>
                    </div>
                    <div class="review-field-ratings">
                      <span>Your Rating
                        <sup>*</sup>
                      </span>
                      <div class="control">
                        <div class="single-control">
                          <span>Value</span>
                          <div class="review-control-vote">
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                          </div>
                        </div>
                        <div class="single-control">
                          <span>Quality</span>
                          <div class="review-control-vote">
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                          </div>
                        </div>
                        <div class="single-control">
                          <span>Price</span>
                          <div class="review-control-vote">
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i class="fa fa-star"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="review-form">
                      <div class="single-form">
                        <label>Nickname
                          <sup>*</sup>
                        </label>
                        <form action="#">
                          <input type="text" />
                        </form>
                      </div>
                      <div class="single-form single-form-2">
                        <label>Summary
                          <sup>*</sup>
                        </label>
                        <form action="#">
                          <input type="text" />
                        </form>
                      </div>
                      <div class="single-form">
                        <label>Review
                          <sup>*</sup>
                        </label>
                        <form action="#">
                          <textarea name="massage" cols="10" rows="4"></textarea>
                        </form>
                      </div>
                    </div>
                    <div class="review-form-button">
                      <a href="#">Submit Review</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product-info-area-end -->
            <!-- new-book-area-start -->
            <div class="new-book-area mt-60">
              <div class="section-title text-center mb-30">
                <h3>upsell products</h3>
              </div>
            </div>
            <!-- new-book-area-start -->
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div class="shop-left">
              <div class="left-title mb-20">
                <h4>Related Products</h4>
              </div>
              <div class="banner-area mb-30">
                <div class="banner-img-2">
                  <a href="#"><img src="static/img/banner/33.jpg" alt="banner" /></a>
                </div>
              </div>
              <div class="left-title-2 mb-30">
                <h2>Compare Products</h2>
                <p>You have no items to compare.</p>
              </div>
              <div class="left-title-2">
                <h2>My Wish List</h2>
                <p>You have no items in your wish list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerlayout from '@/components/HeaderLayout'
import detailModal from '@/components/detailModal'
export default {
  name: 'bookDetail',
  data () {
    return {
      bookInfo: ''
    }
  },
  components: {
    headerlayout,
    detailModal
  },
  created: function () {
    var searchCondition = this.$route.query.searchCondition
    var url = 'http://localhost:8081/getBookDetailByBookId'
    this.$axios.get(url, {
      params: {
        searchCondition: searchCondition
      }
    }).then(res => {
      this.bookInfo = res.data
    })
  }
}
</script>
