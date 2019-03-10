<template>
  <div id='myAccount'>
    <headerlayout></headerlayout>
    <!-- breadcrumbs-area-start -->
    <div class="breadcrumbs-area mb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumbs-menu">
              <ul>
                <li>
                  <a href="main">Home</a>
                </li>
                <li>
                  <a href="myAccount" class="active">myAccount</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- breadcrumbs-area-end -->

    <!-- function-menu-area-start -->
    <div class="function-menu-area">
      <div class="container">
        <div class="row" style="margin-bottom:20px">
          <div class="col-lg-12">
            <h1>我的账户</h1>
          </div>
            <div class="f-cell col-lg-4">
              <a href="orderHistory">
                <div class="f-box">
                  <div class="f-box-row">
                    <div class="f-box-inner">
                      <div class="f-column f-span3">
                        <img alt="我的订单" src="static/img/myAccount/1.png">
                      </div>
                      <div class="f-column f-span9">
                        <h2>我的订单</h2>
                        <span>追踪、退货或再次购买商品</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="f-cell col-lg-4">
              <a href="SignInAndSecurity">
                <div class="f-box">
                  <div class="f-box-inner">
                    <div class="f-column f-span3">
                      <img alt="登录和安全" src="static/img/myAccount/2.png">
                    </div>
                    <div class="f-column f-span9">
                      <h2>登录和安全</h2>
                      <span>编辑登录名、姓名和手机号码</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="f-cell col-lg-4">
              <a href="giftCards">
                <div class="f-box">
                  <div class="f-box-inner">
                    <div class="f-column f-span3">
                      <img alt="礼品卡" src="static/img/myAccount/3.png">
                    </div>
                    <div class="f-column f-span9">
                      <h2>礼品卡</h2>
                      <span>查看余额或兑换礼品卡</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
        </div>
        <div class="row">
            <div class="f-cell col-lg-4">
              <a href="address">
                <div class="f-box">
                  <div class="f-box-inner">
                    <div class="f-column f-span3">
                      <img alt="地址" src="static/img/myAccount/4.png">
                    </div>
                    <div class="f-column f-span9">
                      <h2>地址</h2>
                      <span>添加或编辑地址信息</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="f-cell col-lg-4">
              <a href="paymentOptions">
                <div class="f-box">
                  <div class="f-box-inner">
                    <div class="f-column f-span3">
                      <img alt="付款方式" src="static/img/myAccount/5.png">
                    </div>
                    <div class="f-column f-span9">
                      <h2>付款方式</h2>
                      <span>编辑或添加付款方式</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="f-cell col-lg-4">
              <a href="dealHistory">
                <div class="f-box">
                  <div class="f-box-inner">
                    <div class="f-column f-span3">
                      <img alt="交易记录" src="static/img/myAccount/6.png">
                    </div>
                    <div class="f-column f-span9">
                      <h2>交易记录</h2>
                      <span>查看支付及退款记录</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import headerlayout from '@/components/HeaderLayout'
export default {
  name: 'myAccount',
  components: {
    headerlayout
  }
}
</script>
