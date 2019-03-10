<template>
  <div id="header">
    <!-- header-top-area-start -->
    <div class="header-top-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="account-area text-right">
              <ul>
                <template v-if='userId==""||userId==undefined'>
                  <li>
                    <router-link to='login'>My Account</router-link>
                  </li>
                  <li>
                    <router-link to='login'>Checkout</router-link>
                  </li>
                  <li>
                    <router-link to='login'>Sign in</router-link>
                  </li>
                </template>
                <template v-else>
                  <li>
                    <router-link to='myAccount'>My Account</router-link>
                  </li>
                  <li>
                    <router-link to='checkout'>Checkout</router-link>
                  </li>
                  <li>
                    <a href="#" @click="logOut">Log out</a>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header-top-area-end -->
    <!-- header-mid-area-start -->
    <div class="header-mid-area ptb-40">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div class="logo-area">
              <img src="static/img/logo/3.png" alt="logo" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-5 col-xs-12">
            <div class="header-search">
              <form>
                <input v-model="searchCondition" type="text" placeholder="Enter the title or author of the book" />
                <a href="#" @click='toShop' v-if="isShopPage===false">
                  <i class="fa fa-search"></i>
                </a>
                <a href="#" @click='listenSearchClick' v-else>
                  <i class="fa fa-search"></i>
                </a>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="my-cart">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-shopping-cart"></i>My Cart</a>
                  <span>2</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header-mid-area-end -->
    <!-- main-menu-area-start -->
    <div class="main-menu-area hidden-sm hidden-xs" id="header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="menu-area">
              <nav>
                <ul>
                  <li class="active">
                    <a href="main">Home</a>
                  </li>
                  <li>
                    <a href="shop">Shop
                      <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="mega-menu">
                      <span>
                        <a href="#" class="title">Jackets</a>
                        <a href="shop.html">Tops & Tees</a>
                        <a href="shop.html">Polo Short Sleeve</a>
                        <a href="shop.html">Graphic T-Shirts</a>
                        <a href="shop.html">Jackets & Coats</a>
                        <a href="shop.html">Fashion Jackets</a>
                      </span>
                      <span>
                        <a href="#" class="title">weaters</a>
                        <a href="shop.html">Crochet</a>
                        <a href="shop.html">Sleeveless</a>
                        <a href="shop.html">Stripes</a>
                        <a href="shop.html">Sweaters</a>
                        <a href="shop.html">hoodies</a>
                      </span>
                      <span>
                        <a href="#" class="title">Bottoms</a>
                        <a href="shop.html">Heeled sandals</a>
                        <a href="shop.html">Polo Short Sleeve</a>
                        <a href="shop.html">Flat sandals</a>
                        <a href="shop.html">Short Sleeve</a>
                        <a href="shop.html">Long Sleeve</a>
                      </span>
                      <span>
                        <a href="#" class="title">Jeans Pants</a>
                        <a href="shop.html">Polo Short Sleeve</a>
                        <a href="shop.html">Sleeveless</a>
                        <a href="shop.html">Graphic T-Shirts</a>
                        <a href="shop.html">Hoodies</a>
                        <a href="shop.html">Jackets</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main-menu-area-end -->
  </div>
</template>

<script>
import { getStore } from '../Utils/localStorage'
import { mapMutations } from 'vuex'
export default {
  name: 'headerlayout',
  props: {
    isShopPage: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      userId: getStore('user_id'),
      userName: '',
      searchCondition: '',
      bookInfo: ''
    }
  },
  methods: {
    ...mapMutations([
      'OUT_LOGIN'
    ]),
    logOut () {
      this.OUT_LOGIN(this.userId)
      window.location.reload()
    },
    toShop () {
      this.$router.push({
        path: 'shop',
        name: 'shop',
        query: {searchCondition: this.searchCondition}
      })
    },
    listenSearchClick () {
      this.$emit('listenSearchClick', this.searchCondition)
      console.log(this.isShopPage)
    }
  }
}
</script>
